import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function filterMovies(movies, { searchQuery }) {
  let filteredMovies = movies;

  if (searchQuery) {
    filteredMovies = filteredMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        movie.description
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase()),
    );
  }

  return filteredMovies;
}

export const MoviesList = ({ movies, searchQuery }) => {
  const visibleMovies = filterMovies(movies, { searchQuery });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
