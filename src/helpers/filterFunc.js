/* eslint-disable operator-linebreak */
export function filterFunc(list, query) {
  const queryLow = query.toLowerCase().trim();

  const filteredList = list.filter(
    item =>
      item.title.toLowerCase().includes(queryLow) ||
      item.description.toLowerCase().includes(queryLow),
  );

  return filteredList;
}
