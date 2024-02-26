import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function getPrepareMovies(movies, query) {
  let preparedMovies = [...movies];

  if (query.toLowerCase()) {
    preparedMovies = preparedMovies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase().trim())
      );
    });
  }

  return preparedMovies;
}

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = getPrepareMovies(movies, query);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
