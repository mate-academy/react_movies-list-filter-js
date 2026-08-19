import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => (
  <div className="movies">
    {movies.map(movie => {
      let { title, description } = movie;
      const myQuery = query.replaceAll(' ', '').toLowerCase();

      title = title.replaceAll(' ', '').toLowerCase();
      description = description.replaceAll(' ', '').toLowerCase();

      if (title.includes(myQuery) || description.includes(myQuery)) {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      }

      return null;
    })}
  </div>
);
