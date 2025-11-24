import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query = '' }) => {
  const normalizedQuery = query.trim().toLowerCase();

  const visibleMovies = movies.filter(movie => {
    if (!normalizedQuery) return true;

    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase().trim();

    const isTitleMatchQuery = title.includes(normalizedQuery);
    const isDescriptionMatchQuery = description.includes(normalizedQuery);

    return isTitleMatchQuery || isDescriptionMatchQuery;
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
