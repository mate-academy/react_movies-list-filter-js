export const getFilteredMovies = (movies, query) => {
  if (query) {
    return (
      movies.filter((movie) => {
        const { title, description } = movie;

        return title.toLowerCase().includes(query)
        || description.toLowerCase().includes(query);
      })
    );
  }

  return movies;
};
