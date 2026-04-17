export function getVisibleMovies({ movies, filterQuery }) {
  const normalizedQuery = filterQuery.trim().toLowerCase();

  return movies.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const movieDescription = movie.description.toLowerCase();

    return (
      movieTitle.includes(normalizedQuery) ||
      movieDescription.includes(normalizedQuery)
    );
  });
}
