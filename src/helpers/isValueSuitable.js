export const isValueSuitable = (query, value) => {
  const normalizedQuery = query.toLowerCase().trim();

  return value.toLowerCase().includes(normalizedQuery);
};
