export function getPreparedMovies(movies, searchQuery) {

  return movies.filter((movie) => {
    const preparedSearchQuery = searchQuery.trim().toLowerCase();
    return (
      movie.title.toLowerCase().includes(preparedSearchQuery) ||
      movie.description.toLowerCase().includes(preparedSearchQuery)
    );
  });
}
