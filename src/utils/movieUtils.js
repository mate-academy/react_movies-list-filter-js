export const getPreparedMovies = (movies, { query }) => {
  const preparedMovies = [...movies];
  const queryToLowerCase = query.toLowerCase().trim();

  return preparedMovies
    .filter(({ title, description }) => {
      const hasTitleTheQuery = title.toLowerCase().includes(queryToLowerCase);
      const hasDescriptionTheQuery
        = description.toLowerCase().includes(queryToLowerCase);

      return hasTitleTheQuery || hasDescriptionTheQuery;
    });
};
