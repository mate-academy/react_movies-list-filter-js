import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

// export const App = () => (
//   <div className="page">
//     <div className="page-content">
//       <div className="box">
//         <div className="field">
//           {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
//           <label htmlFor="search-query" className="label">
//             Search movie
//           </label>

//           <div className="control">
//             <input
//               type="text"
//               id="search-query"
//               className="input"
//               placeholder="Type search word"
//             />
//           </div>
//         </div>
//       </div>

//       <MoviesList movies={moviesFromServer} />
//     </div>

//     <div className="sidebar">Sidebar goes here</div>
//   </div>
// );
export const App = () => {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const visibleMovies = moviesFromServer.filter(
    movie =>
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery),
  );

  return (
    <div className="pag">
      <div className="pag-content">
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
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
