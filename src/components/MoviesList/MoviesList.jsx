import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

const Filter = (movies, fragment) => {
  const result = [];

  movies.forEach(movie => {
    if (
      movie.title.toLowerCase().includes(fragment.trim().toLowerCase()) ||
      movie.description.toLowerCase().includes(fragment.trim().toLowerCase())
    ) {
      result.push(movie);
    }
  });

  return result;
};

export const MoviesList = ({ movies, fragment }) => {
  let visibleMovies = [...movies];

  if (fragment) {
    visibleMovies = Filter(visibleMovies, fragment);
  }

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
