import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter((movie) => {
    const titleToLower = movie.title.toLowerCase();
    const descriptionToLower = movie.description.toLowerCase();
    const queryToLower = query.toLowerCase().trim();

    return titleToLower.includes(queryToLower)
      || descriptionToLower.includes(queryToLower);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
