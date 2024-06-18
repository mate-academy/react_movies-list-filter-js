import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const filterList = queryinput => {
    let preparedMovies = movies;
    const normalizedQuery = queryinput.trim().toLowerCase();

    if (normalizedQuery) {
      preparedMovies = preparedMovies.filter(
        movie =>
          movie.title.toLowerCase().includes(normalizedQuery) ||
          movie.description.toLowerCase().includes(normalizedQuery),
      );
    }

    return preparedMovies;
  };

  const visibleList = filterList(query);

  return (
    <div className="movies">
      {visibleList.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
