import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const normalizedQuery = query.toLowerCase().trim();

  const visibleMovies = () => {
    let visbledMovies = movies;

    if (normalizedQuery) {
      visbledMovies = movies.filter(movie => {
        return (
          movie.title.toLowerCase().includes(normalizedQuery) ||
          movie.description.toLowerCase().includes(normalizedQuery)
        );
      });
    }

    return visbledMovies;
  };

  return (
    <div className="movies">
      {visibleMovies().map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
