import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

export const MoviesList = ({ movies, filterBy }) => {
  const visibleMovies = movies.filter(movie => {
    const normalizedQuery = '' || filterBy.trim().toLowerCase();

    return (
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery)
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
