import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const preparedMovies = [...movies].filter(({ title, description }) => title
      .toLowerCase()
      .includes(query)
      || description
        .toLowerCase()
        .includes(query)) || [...movies];

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
