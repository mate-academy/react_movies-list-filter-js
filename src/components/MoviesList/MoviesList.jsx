import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => (
  <div className="movies">
    {movies.map(movie => {
      if (
        movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        movie.description.toLowerCase().includes(query.trim().toLowerCase())
      ) {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      }

      return false;
    })}
  </div>
);
