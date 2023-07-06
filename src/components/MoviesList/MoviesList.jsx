import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const trimmQuery = query.trim().toLowerCase();

  const filteredMovies = movies.filter((movie) => {
    const title = movie.title
      .toLowerCase()
      .includes(trimmQuery);

    const description = movie.description
      .toLowerCase()
      .includes(trimmQuery);

    return title || description;
  });

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
