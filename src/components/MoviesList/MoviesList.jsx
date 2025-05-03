import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  let preparedArray = [...movies];

  if (query) {
    preparedArray = preparedArray.filter(item => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  return (
    <div className="movies">
      {preparedArray.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
