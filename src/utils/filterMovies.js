export const filterMovies = (movies, query) => {
  const normalizedStr = query.trim().toLowerCase();

  return movies.filter(
    movie =>
      movie.title.toLowerCase().includes(normalizedStr) ||
      movie.description.toLowerCase().includes(normalizedStr),
  );
};
