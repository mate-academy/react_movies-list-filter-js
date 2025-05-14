import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const normalizedQuery = query.trim().toLowerCase();

  const filteredMovies = query
    ? movies.filter(
        movie => // eslint-disable-line
          movie.title.toLowerCase().includes(normalizedQuery) ||// eslint-disable-line
          movie.description.toLowerCase().includes(normalizedQuery),
      )// eslint-disable-line
    : movies;

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
