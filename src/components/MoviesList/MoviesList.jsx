import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => {
    const movieInfo = movie.title + movie.description;

    return movieInfo.toLowerCase().includes(query);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
