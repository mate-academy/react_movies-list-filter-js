export const filterMoviesByQuery = (movies, query) => {
  const normalizedQuery = query.trim().toLowerCase();

  return movies.filter(movie => (
    movie.title.toLowerCase().includes(normalizedQuery)
      || movie.description.toLowerCase().includes(normalizedQuery)
  ));
};
