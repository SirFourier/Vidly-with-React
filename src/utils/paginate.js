export default function paginate(items, pageNumber, pageSize) {
  const firstIndex = (pageNumber - 1) * pageSize;
  return { items: items.slice(firstIndex, firstIndex + pageSize), firstIndex };
}
