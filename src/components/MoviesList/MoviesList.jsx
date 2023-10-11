import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

const filterList = (movies, query) => {
  let filteredList = [...movies];

  if (query) {
    const normalizedQuery = query.trim().toLowerCase();

    filteredList = movies.filter(movie => (
      movie.title.toLowerCase().includes(normalizedQuery)
        || movie.description.toLowerCase().includes(normalizedQuery)
    ));
  }

  return filteredList;
};

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = filterList(movies, query);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
