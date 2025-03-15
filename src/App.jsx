import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useEffect, useState } from 'react';

export const App = () => {

    const [query, setQuery] = useState('') 
    const [visibleMovies,setVisibleMovies] = useState(moviesFromServer)
    const filterMovies = () => {
      const filteredMovies = moviesFromServer.filter(movie => {
        const normalizedQuery = query.trim().toLowerCase();
        if (normalizedQuery === '') {
          return true;
        }
        const titleContainsQuery = movie.title.toLowerCase().includes(normalizedQuery);
        const descriptionContainsQuery = movie.description.toLowerCase().includes(normalizedQuery);
        return titleContainsQuery || descriptionContainsQuery;
      });

      setVisibleMovies(filteredMovies);
    };

    
    useEffect(() => {
      filterMovies();
    }, [query]);
        

    

    return (<div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovies} />
        </div>

        <div className="sidebar">Sidebar goes here</div>
      </div>)
};
