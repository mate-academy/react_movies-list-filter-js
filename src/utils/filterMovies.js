export function filterMovies(movies, insertedQuery) {
  let filteredMovies = [...movies];
  const normalizedQuery = insertedQuery.trim().toLowerCase();

  if (insertedQuery) {
    filteredMovies = filteredMovies.filter(
      movie =>
        movie.title.trim().toLowerCase().includes(normalizedQuery) ||
        movie.description.trim().toLowerCase().includes(normalizedQuery),
    );
  }

  return filteredMovies;
}
