export function getNewMovies(movies, query) {
  let visibleMovies = [...movies];

  if (query.length) {
    visibleMovies = visibleMovies.filter((movie) => {
      const movieTitle = movie.title.toLowerCase();
      const movieDescription = movie.description.toLowerCase();

      return movieTitle.includes(query.toLowerCase().trim())
        || movieDescription.includes(query.toLowerCase().trim());
    });
  }

  return visibleMovies;
}
