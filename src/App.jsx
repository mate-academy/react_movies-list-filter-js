import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useEffect, useState } from 'react';

export const App = () => {

    const [query, setQuery] = useState('') 
    const [visibleMovies,setVisibleMovies] = useState(moviesFromServer)
    // Add this useEffect to run the filtering whenever query changes
    
    const filterMovies = () => {
    const filteredMovies = moviesFromServer.filter(movie => {
      // Normalize the query by trimming whitespace and converting to lowercase
      const normalizedQuery = query.trim().toLowerCase();
      
      // If query is empty after trimming, return all movies
      if (normalizedQuery === '') {
        return true;
      }
      
      // Check if movie title or description contains the normalized query
      const titleContainsQuery = movie.title.toLowerCase().includes(normalizedQuery);
      const descriptionContainsQuery = movie.description.toLowerCase().includes(normalizedQuery);
      
      // Return true if either title or description contains the query
      return titleContainsQuery || descriptionContainsQuery;
    });
    
    // Update the visibleMovies state with the filtered results
    setVisibleMovies(filteredMovies);
  };
    
    
    
    useEffect(() => {
      filterMovies();
    }, [query]); // This dependency array ensures the effect runs when query changes
        

    

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
