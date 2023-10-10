export const filterMovies = (movies, query) => {
  const lowerQuery = query.toLowerCase().trim();

  if (query) {
    return movies.filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      if (title.includes(lowerQuery)
        || description.includes(lowerQuery)) {
        return true;
      }

      return false;
    });
  }

  return movies;
};
