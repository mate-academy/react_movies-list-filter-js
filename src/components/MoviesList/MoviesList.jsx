import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function filterMovies(searchParams, movie) {
  const formattedQuery = searchParams.trim().toLowerCase();
  const formattedMovieTitle = movie.title.trim().toLowerCase();
  const formattedDescription = movie.description.trim().toLowerCase();

  if (
    formattedMovieTitle.includes(formattedQuery) ||
    formattedDescription.includes(formattedQuery)
  ) {
    return true;
  }

  return false;
}

export const MoviesList = ({ movies, filter }) => {
  return (
    <div className="movies">
      {movies.map(
        movie =>
          filterMovies(filter, movie) && (
            <MovieCard key={movie.imdbId} movie={movie} />
          ),
      )}
    </div>
  );
};
