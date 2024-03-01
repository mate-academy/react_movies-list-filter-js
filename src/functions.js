export const getPreparedMovies = (movies, { query }) => {
  let moviesList = [...movies];

  if (query) {
    const normalizedQuery = query.trim().toLowerCase();

    moviesList = moviesList.filter(movie => {
      const normalizedTitle = movie.title.toLowerCase();
      const normalizedDesc = movie.description.toLowerCase();

      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedDesc.includes(normalizedQuery)
      );
    });
  }

  return moviesList;
};
