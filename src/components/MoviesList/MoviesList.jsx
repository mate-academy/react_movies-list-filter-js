import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, search }) => {
  let moviesFilter = [...movies];

  if (search) {
    moviesFilter = moviesFilter.filter(
      movie =>
        movie.title.toLowerCase().includes(search) ||
        movie.description.toLowerCase().includes(search),
    );
  }

  return (
    <div className="movies">
      {moviesFilter.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
