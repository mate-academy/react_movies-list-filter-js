import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function getPreparedMovies(allMovies, queryFind) {
  const prepareText = (text, queryInput) => text
    .toLowerCase().includes(queryInput);

  return [...allMovies]
    .filter(({ title, description }) => prepareText(title, queryFind)
    || prepareText(description, queryFind)) || [...allMovies];
}

export const MoviesList = ({ movies, query }) => {
  const preparedMovies = getPreparedMovies(movies, query);

  return (
    <div className="movies">
      {preparedMovies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  );
};
