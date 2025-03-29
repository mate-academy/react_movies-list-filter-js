import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, inputValue }) => {
  let filteredMovies = movies;

  if (inputValue) {
    filteredMovies = movies.filter(movie => {
      const movieTitle = movie.title.toLowerCase();
      const movieDescription = movie.description.toLowerCase();

      return (
        movieTitle.includes(inputValue) || movieDescription.includes(inputValue)
      );
    });
  }

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
