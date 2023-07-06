import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter((movie) => {
    const formattedTitle = movie.title.toLowerCase();
    const formattedDescription = movie.description.toLowerCase();
    const formattedQuery = query.trim().toLowerCase();

    return formattedTitle.includes(formattedQuery)
    || formattedDescription.includes(formattedQuery);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
