export const checkQuery = (textField, query) => (
  textField.toLowerCase().includes(query)
);

export const getPreparedMovies = (movies, { query }) => {
  const preparedMovies = [...movies];
  const queryToLowerCase = query.toLowerCase().trim();

  return preparedMovies
    .filter(({ title, description }) => {
      const hasTitleTheQuery = checkQuery(title, queryToLowerCase);
      const hasDescriptionTheQuery = checkQuery(description, queryToLowerCase);

      return hasTitleTheQuery || hasDescriptionTheQuery;
    });
};
