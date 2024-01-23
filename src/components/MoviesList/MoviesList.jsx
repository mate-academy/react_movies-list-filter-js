import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function filterMovies(movies, searchFilter) {
  const adjustedSearchFilter = searchFilter.trim().toLowerCase();

  return movies.filter(({ title, description }) => title.toLowerCase()
    .includes(adjustedSearchFilter)
    || description.toLowerCase().includes(adjustedSearchFilter));
}

export const MoviesList = ({ movies, searchFilter }) => {
  const visibleMovies = filterMovies(movies, searchFilter);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
