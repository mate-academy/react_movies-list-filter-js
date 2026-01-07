import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function normalizeSearchQuery(searchQuery) {
  return searchQuery.trim().toLowerCase();
}

function filterMovies(movies, searchQuery) {
  const queryNormalized = normalizeSearchQuery(searchQuery);

  if (searchQuery) {
    return movies.filter(
      ({ title, description }) =>
        title.toLowerCase().includes(queryNormalized) ||
        description.toLowerCase().includes(queryNormalized),
    );
  }

  return movies;
}

export const MoviesList = ({ movies, searchQuery }) => {
  const visibleMovies = filterMovies(movies, searchQuery);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
