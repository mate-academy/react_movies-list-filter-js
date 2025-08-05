export function prepareMovies(movies, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return movies;
  }

  return movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery)
    );
  });
}
