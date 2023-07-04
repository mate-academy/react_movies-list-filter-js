import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const trimmedQuery = query.trim().toLowerCase();

  const filteredMovies = [...movies].filter((movie) => {
    const title = movie.title
      .toLowerCase()
      .includes(trimmedQuery);

    const description = movie.description
      .toLowerCase()
      .includes(trimmedQuery);

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
