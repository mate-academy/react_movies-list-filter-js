import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const filteredMovies = movies.filter((movie) => {
    const lowerCaseQuery = query.toLowerCase();

    return (
      movie.title.toLowerCase().includes(lowerCaseQuery)
     || movie.description.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
