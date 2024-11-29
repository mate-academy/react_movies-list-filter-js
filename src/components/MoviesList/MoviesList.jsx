import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => {
    const includesTitle = movie.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const includesDescription = movie.description
      .toLowerCase()
      .includes(query.toLowerCase());

    return includesTitle || includesDescription;
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
