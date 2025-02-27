import React from 'react';

export function Search({ setSearch, search }) {
  return (
    <div className="field">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          onChange={e => {
            setSearch(e.target.value);
          }}
          value={search}
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
        />
      </div>
    </div>
  );
}
