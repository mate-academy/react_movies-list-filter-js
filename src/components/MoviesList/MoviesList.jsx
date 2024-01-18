import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => (
    movie.title.toLowerCase().includes(query.toLowerCase().trim())
    || movie.description.toLowerCase().includes(query.toLowerCase().trim())));

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  );
};
