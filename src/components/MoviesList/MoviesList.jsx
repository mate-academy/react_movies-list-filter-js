import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const queryLowerCase = query.toLowerCase().trim();

  const visibleMovies = movies.filter(movie => {
    const titleMatch =
      movie.title && movie.title.toLowerCase().includes(queryLowerCase);
    const descriptionMatch =
      movie.description &&
      movie.description.toLowerCase().includes(queryLowerCase);

    return titleMatch || descriptionMatch;
  });

  // eslint-disable-next-line no-console
  // console.log(visibleMovies);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
