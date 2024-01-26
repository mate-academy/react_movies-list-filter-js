import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const properQuery = query.toLowerCase().trim();

  const visibleMovies = movies.filter(movie => (
    movie.title.toLowerCase().includes(properQuery)
    || movie.description.toLowerCase().includes(properQuery)
  ));

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
