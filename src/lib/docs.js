import anchors from "./generated-docs/anchors.json";

const modules = import.meta.glob("./generated-docs/*.js");

export function hasDoc(lang, name) {
  return Boolean(anchors[lang]?.[name]);
}

export function headings(lang, name) {
  return anchors[lang]?.[name] || [];
}

export async function loadDoc(lang, name) {
  if (!hasDoc(lang, name)) throw Error("Document not found");
  const module = modules[`./generated-docs/${lang}-${name}.js`];
  if (!module) throw Error("Generated document missing");
  return (await module()).default;
}
