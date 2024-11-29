export function prepareMovies(movies, { query }) {
  const normalizeString = string => string.trim().toLowerCase();

  let preparedMovies = movies;

  const normalizedQuery = normalizeString(query);

  if (query) {
    preparedMovies = preparedMovies.filter(({ title, description }) => {
      const normalizedTitle = normalizeString(title);

      const normalizedDescript = normalizeString(description);

      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedDescript.includes(normalizedQuery)
      );
    });
  }

  return preparedMovies;
}
