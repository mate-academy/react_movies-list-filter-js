import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => (
  <div className="movies">
    {movies
      .filter(movie => includesQuery(query, movie))
      .map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
  </div>
);

function includesQuery(query, movie) {
  const lowerQuery = query.toLowerCase().trim();
  const lowerTitle = movie.title.toLowerCase();
  const lowerDescription = movie.description.toLowerCase();

  return (
    lowerTitle.includes(lowerQuery) || lowerDescription.includes(lowerQuery)
  );
}
