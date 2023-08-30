import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function getPreparedMovies(allMovies, queryFind) {
  return [...allMovies].filter(({ title, description }) => title
    .toLowerCase()
    .includes(queryFind)
    || description
      .toLowerCase()
      .includes(queryFind)) || [...allMovies];
}

export const MoviesList = ({ movies, query }) => {
  const preparedMovies = getPreparedMovies(movies, query);

  return (
    <div className="movies">
      {preparedMovies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  );
};
