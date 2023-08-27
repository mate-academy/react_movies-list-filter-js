import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function filterMoviesByQuery(movies, query) {
  const lowerCaseQuery = query
    .toLowerCase()
    .trim();

  const filteredMovies = movies.filter(({ title, description }) => {
    const searchedMovie = title.toLowerCase().includes(lowerCaseQuery)
      || description.toLowerCase().includes(lowerCaseQuery);

    return searchedMovie;
  });

  return filteredMovies;
}

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = filterMoviesByQuery(movies, query);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
