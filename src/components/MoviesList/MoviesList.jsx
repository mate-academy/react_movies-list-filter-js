import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const search = query.toLowerCase().trim();

  /* eslint-disable indent */

  const filtered = query
    ? movies.filter(
        m =>
          m.title.toLowerCase().includes(search) ||
          m.description.toLowerCase().includes(search),
      )
    : movies;

  /* eslint-enable indent */

  return (
    <div className="movies">
      {filtered.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
