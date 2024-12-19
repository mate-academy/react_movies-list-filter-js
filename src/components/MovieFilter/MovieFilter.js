export const MovieFilter = (movies, query) => {
  let filteredMovies = [...movies];
  const normilizedQuery = query.trim().toLowerCase();

  if (query) {
    filteredMovies = filteredMovies.filter(movie => (
      movie.title.toLowerCase().includes(normilizedQuery) ||
        movie.description.toLowerCase().includes(normilizedQuery)
    ));
  }

  return filteredMovies;
};
