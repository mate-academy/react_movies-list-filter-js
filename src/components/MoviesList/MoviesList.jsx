import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const compare = (content, text) => {
    return content.toLowerCase().includes(text.trim().toLowerCase());
  };

  return (
    <div className="movies">
      {movies
        .filter(movie => {
          return (
            compare(movie.title, query) || compare(movie.description, query)
          );
        })
        .map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
    </div>
  );
};
