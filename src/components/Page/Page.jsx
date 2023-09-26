import './Page.scss';
import { MoviesList } from '../MoviesList';

export const Page = ({ visibleMovies, filterBy }) => (
  <div className="page">
    <div className="page-content">
      <div className="box">
        <div className="field">

          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              onChange={(event) => {
                filterBy(event.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <MoviesList movies={visibleMovies} />
    </div>

    <div className="sidebar">
      Sidebar goes here
    </div>
  </div>
);
