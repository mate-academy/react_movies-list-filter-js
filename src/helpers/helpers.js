const includesQuery = (str, query) => {
  const lowerCaseStr = str.toLowerCase();
  const lowerCaseQuery = query.toLowerCase();

  return lowerCaseStr.includes(lowerCaseQuery);
};

export const getPreparedMovies = (movies, { query }) => {
  const queryToLowerCase = query.toLowerCase().trim();

  return movies.filter(({ title, description }) => {
    const hasMatchingTitle = includesQuery(title, queryToLowerCase);
    const hasMatchingDescription = includesQuery(description, queryToLowerCase);

    return hasMatchingTitle || hasMatchingDescription;
  });
};
