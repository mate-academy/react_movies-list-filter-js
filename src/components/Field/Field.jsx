import React from 'react';

export const Field = ({
  filterBy,
  query,
}) => (
  <div className="field">
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label
      htmlFor="search-query"
      className="label"
    >
      Search movie
    </label>

    <div className="control">
      <input
        value={query}
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        onChange={(changeEvent) => {
          filterBy(changeEvent.target.value);
        }}
      />
    </div>
  </div>
);
