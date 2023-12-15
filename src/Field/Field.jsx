import React from 'react';

export const Field = ({ filterBy, query }) => (
  <div className="box">
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>
      <div className="control">
        <input
          value={query}
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
);
