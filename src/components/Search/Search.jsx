import React from 'react';

export const Search = ({ query, onChangeInput }) => {
  return (
    <div className="box">
      <div className="field">
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <div className="control">
          <input
            value={query}
            onChange={e => {
              onChangeInput(e.target.value);
            }}
            type="text"
            id="search-query"
            className="input"
            placeholder="Type search word"
          />
        </div>
      </div>
    </div>
  );
};
