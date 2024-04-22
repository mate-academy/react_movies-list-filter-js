import moviesFromServer from '../../api/movies.json';

export const getMovie = query => {
  return moviesFromServer.filter(
    movie =>
      movie.title.trim().toLowerCase().includes(query.trim().toLowerCase()) ||
      movie.description
        .trim()
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
};
