export function getPreparedMovies(movies, { querry }) {
  let prepearedMovie = [...movies];

  if (querry) {
    const normalizedQuerry = querry.trim().toLowerCase();

    prepearedMovie = prepearedMovie.filter(m => {
      return (
        m.title.toLowerCase().includes(normalizedQuerry) ||
        m.description.toLowerCase().includes(normalizedQuerry)
      );
    });
  }

  return prepearedMovie;
}
