import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function sortMovies(movies, query) {
  let res = [...movies];

  if (query) {
    res = res.filter(
      movie =>
        movie.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        movie.description.toLowerCase().includes(query.toLowerCase().trim()),
    );
  }

  return res;
}

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = sortMovies(movies, query);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
