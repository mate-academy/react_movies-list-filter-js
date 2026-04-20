export const prepareMovies = (movies, { query = '' }) => {
  const normalizedQuery = (query || '').trim().toLowerCase();

  if (!normalizedQuery) {
    return movies;
  }

  return movies.filter(movie => {
    const movieTitle = movie.title.toLowerCase().includes(normalizedQuery);
    const movieDescription = movie.description
      .toLowerCase()
      .includes(normalizedQuery);

    return movieTitle || movieDescription;
  });
};
