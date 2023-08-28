import React, { useState } from "react";
import "./App.scss";
import { MoviesList } from "./components/MoviesList";
import moviesFromServer from "./api/movies.json";
import { SearchField } from "./components/SearchField";

// Utility function to check if a string includes the search prompt
function includesSearchPrompt(str, searchPrompt) {
  return str.toLowerCase().includes(searchPrompt);
}

function getPreparedMovies(movies, query) {
  if (!query) {
    return movies;
  }

  const searchPrompt = query.toLowerCase().trim();

  return movies.filter(
    (movie) =>
      includesSearchPrompt(movie.title, searchPrompt) ||
      includesSearchPrompt(movie.description, searchPrompt)
  );
}

export const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>
            <SearchField filterBy={setQuery} />
          </div>
        </div>

        <MoviesList movies={getPreparedMovies(moviesFromServer, query)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
