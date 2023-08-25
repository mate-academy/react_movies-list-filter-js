import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies = movies
      .filter(({ title, description }) => title.toLowerCase().includes(query)
      || description.toLowerCase().includes(query));
  }

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
