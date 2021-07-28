export default function generateId(items) {
  const newId = Math.max(...items.map((o) => o.id));
  return newId + 1;
}
