export default function findNextId(items) {
  const newId = Math.max(...items.map((o) => o.id));
  return newId + 1;
}
