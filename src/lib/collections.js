const key = "kubectl-cheatsheet-collections-v1";

export function normalizeCollections(value, validIds) {
  const ids = new Set(validIds);
  const saved = Array.isArray(value?.favorites) ? value.favorites : [];
  const collections = Array.isArray(value?.collections) ? value.collections : [];
  return {
    version: 1,
    favorites: [...new Set(saved.filter((id) => typeof id === "string" && ids.has(id)))],
    collections: collections.slice(0, 20).filter((item) => item && typeof item.name === "string" && item.name.trim().length <= 40)
      .map((item) => ({ name: item.name.trim(), ids: [...new Set((Array.isArray(item.ids) ? item.ids : []).filter((id) => ids.has(id)))] }))
  };
}

export function readCollections(storage, validIds) {
  let raw;
  try {
    raw = storage.getItem(key);
  } catch (_error) {
    return { data: normalizeCollections(null, validIds), available: false };
  }
  try {
    return { data: normalizeCollections(raw ? JSON.parse(raw) : null, validIds), available: true, recovered: false };
  } catch (_error) {
    return { data: normalizeCollections(null, validIds), available: true, recovered: true };
  }
}

export function writeCollections(storage, data) {
  try {
    storage.setItem(key, JSON.stringify(data));
    return true;
  } catch (_error) {
    return false;
  }
}

export function exportCollections(data) {
  return JSON.stringify({ version: 1, favorites: data.favorites, collections: data.collections }, null, 2);
}
