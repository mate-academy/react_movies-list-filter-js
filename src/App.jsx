/* eslint-disable react/jsx-no-undef */
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

import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const lowerCaseQuery = query.trim().toLowerCase();

    const titleIncludesQuery = movie.title
      .toLowerCase()
      .includes(lowerCaseQuery);
    const descriptionIncludesQuery = movie.description
      .toLowerCase()
      .includes(lowerCaseQuery);

    return titleIncludesQuery || descriptionIncludesQuery;
  });

  return (
    <div className="page-content">
      <div className="box">
        <div className="field">
          <label htmlFor="search-query" className="label">
            Пошук фільму
          </label>
          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              placeholder="Введіть слово для пошуку"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>

      <MoviesList movies={visibleMovies} />

      <div className="sidebar">тут буде бічна панель</div>
    </div>
  );
};
