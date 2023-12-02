import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import moviesFromServer from '../../api/movies.json';

export const MoviesList = ({
  lookForWord,
}) => {
  const trimmedLookingForWOrd = lookForWord.trim().toLowerCase();
  const filtered = trimmedLookingForWOrd !== ''
    ? (
      moviesFromServer.filter(movie => movie.title.toLowerCase().includes(
        trimmedLookingForWOrd,
      )
      || movie.description.toLowerCase().includes(
        trimmedLookingForWOrd,
      )))
    : moviesFromServer;

  return (
    <div className="movies">
      {filtered.map(item => (
        <MovieCard
          key={item.imdbId}
          movie={item}
        />
      ))}
    </div>
  );
};
