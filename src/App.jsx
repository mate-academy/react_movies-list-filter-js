import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const clearQuery = query.toLowerCase().trim();

  const visibleMovies = moviesFromServer.filter(
    movie =>
      movie.title.toLowerCase().includes(clearQuery) ||
      movie.description.toLowerCase().includes(clearQuery),
  );

  // console.log('queryy:', query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                value={query}
                onChange={event => setQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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

// =================== start ========================

// import './App.scss';
// import { MoviesList } from './components/MoviesList';
// import moviesFromServer from './api/movies.json';

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
