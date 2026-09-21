const aliases = {
  "прошлые": "previous", "предыдущие": "previous", "перезапускается": "crashloopbackoff",
  "перезапуск": "restart", "логи": "logs", "лог": "logs", "журналы": "logs",
  "поды": "pods", "подов": "pods", "под": "pod", "пода": "pod", "события": "events",
  "готовность": "ready", "готов": "ready", "сервис": "service", "служба": "service",
  "нода": "node", "ноды": "nodes", "нод": "nodes", "узел": "node", "узлы": "nodes",
  "права": "permission", "право": "permission", "доступ": "permission", "доступа": "permission", "контекст": "context",
  "применить": "apply", "сравнить": "diff", "проверить": "check",
  "откатить": "undo", "откат": "undo", "список": "list",
  "не": "", "неработает": "unavailable", "недоступен": "unavailable",
  "previous": "previous", "prior": "previous", "restart": "restart"
};

export function normalize(value) {
  return String(value).toLowerCase().normalize("NFKD").replace(/\p{M}/gu, "").replaceAll("ё", "е").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

export function tokens(value) {
  return normalize(value).split(/\s+/).filter(Boolean).map((token) => aliases[token] ?? token).filter(Boolean);
}

function distanceOne(a, b) {
  if (Math.abs(a.length - b.length) > 1 || Math.min(a.length, b.length) < 4) return false;
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else { i++; j++; }
  }
  return edits + (i < a.length || j < b.length ? 1 : 0) <= 1;
}

export function searchRecipes(recipes, query, lang = "eng", filters = {}) {
  const terms = tokens(query);
  return recipes.filter((recipe) =>
    (!filters.category || recipe.category === filters.category) &&
    (!filters.effect || recipe.effect === filters.effect) &&
    (!filters.sensitive || recipe.sensitive) &&
    (!filters.tool || recipe.command.startsWith(`${filters.tool} `)) &&
    (!filters.scope || (recipe.scope || "namespace") === filters.scope) &&
    (!filters.requires || recipe.requires.includes(filters.requires))
  ).map((recipe) => {
    const title = tokens(recipe.title[lang]);
    const intents = tokens(recipe.intents.join(" "));
    const command = tokens(recipe.command.replace(/{{\w+}}/g, " "));
    const id = tokens(recipe.id);
    let score = 0;
    for (const term of terms) {
      if (id.includes(term)) score += 12;
      else if (intents.includes(term)) score += 10;
      else if (title.includes(term)) score += 8;
      else if (command.includes(term)) score += 5;
      else if ([...title, ...intents, ...command].some((word) => word.startsWith(term) && term.length > 2)) score += 3;
      else if ([...title, ...intents, ...command].some((word) => distanceOne(term, word))) score += 1;
    }
    return { recipe, score };
  }).filter((item) => !terms.length || item.score > 0)
    .sort((a, b) => b.score - a.score || a.recipe.id.localeCompare(b.recipe.id))
    .map((item) => item.recipe);
}
