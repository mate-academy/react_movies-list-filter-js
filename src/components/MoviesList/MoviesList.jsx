import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const normalizedQuery = query.toLowerCase().trim();

  const visibleMovies = movies.filter(film => {
    return (
      film.title.toLowerCase().includes(normalizedQuery) ||
      film.description.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
