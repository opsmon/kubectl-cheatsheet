const namePattern = /^[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$/;
const namespacePattern = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const resourcePattern = /^[a-z][a-z0-9.-]*$/;

export function shellQuote(value) {
  return `'${value.replaceAll("'", `'"'"'`)}'`;
}

function valid(value, kind) {
  if (!value || /[\x00-\x1f\x7f]/.test(value)) return false;
  if (kind === "name") return value.length <= 253 && namePattern.test(value);
  if (kind === "namespace") return value.length <= 63 && namespacePattern.test(value);
  if (kind === "context") return value.length <= 253 && !value.startsWith("-");
  if (kind === "resource") return value.length <= 253 && resourcePattern.test(value);
  if (kind === "path") return value.length <= 512 && !value.startsWith("-");
  return false;
}

export function buildCommand(recipe, values = {}, options = {}) {
  const errors = {};
  let command = recipe.command;
  for (const param of recipe.params) {
    const value = String(values[param.name] ?? "").trim();
    if (!valid(value, param.kind)) {
      errors[param.name] = "invalid";
      continue;
    }
    command = command.replaceAll(`{{${param.name}}}`, shellQuote(value));
  }

  const context = String(options.context ?? "").trim();
  const namespace = String(options.namespace ?? "").trim();
  const container = String(options.container ?? "").trim();
  if (context && !valid(context, "context")) errors.context = "invalid";
  if (namespace && !valid(namespace, "namespace")) errors.namespace = "invalid";
  if (namespace && recipe.scope === "cluster") errors.namespace = "cluster-scoped";
  if (namespace && recipe.scope === "local") errors.namespace = "local";
  if (context && recipe.scope === "local") errors.context = "local";
  if (options.allNamespaces && namespace) errors.namespace = "conflict";
  if (options.allNamespaces && (recipe.scope === "cluster" || recipe.scope === "local")) errors.allNamespaces = "scope";
  if (options.allNamespaces && !/^kubectl (?:get|describe|logs|events)\b/.test(recipe.command)) errors.allNamespaces = "unsupported";
  if (options.allNamespaces && recipe.params.length) errors.allNamespaces = "unsupported";
  if (container && !/^kubectl logs\b/.test(recipe.command)) errors.container = "unsupported";
  if (container && !valid(container, "name")) errors.container = "invalid";

  if (Object.keys(errors).length) return { ready: false, command: "", errors };

  if (container) command += ` --container=${shellQuote(container)}`;

  if (command.startsWith("kubectl ")) {
    const flags = [context && `--context=${shellQuote(context)}`, namespace && `--namespace=${shellQuote(namespace)}`, options.allNamespaces && "--all-namespaces"].filter(Boolean);
    command = `kubectl${flags.length ? ` ${flags.join(" ")}` : ""} ${command.slice(8)}`;
  } else if (context || namespace || options.allNamespaces) {
    return { ready: false, command: "", errors: { scope: "unsupported-tool" } };
  }
  return { ready: true, command, errors: {} };
}
