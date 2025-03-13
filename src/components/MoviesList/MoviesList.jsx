/* eslint-disable function-paren-newline */
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const movieFiltering = (querys, movie) => {
    const formattedQuery = querys.trim().toLowerCase();
    const movieTitle = movie.title.trim().toLowerCase();
    const movieDescription = movie.description.trim().toLowerCase();

    if (
      movieTitle.includes(formattedQuery) ||
      movieDescription.includes(formattedQuery)
    ) {
      return true;
    }

    return false;
  };

  return (
    <div className="movies">
      {movies.map(movie =>
        movieFiltering(query, movie) ? (
          <MovieCard key={movie.imdbId} movie={movie} />
        ) : (
          ''
        ),
      )}
    </div>
  );
};
