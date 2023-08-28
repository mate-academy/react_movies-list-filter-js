export const MovieSearchBar = ({ filterBy, query }) => (
  <div className="box">
    <div className="field">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
          onChange={event => filterBy(event.currentTarget.value)}
        />
      </div>
    </div>
  </div>
);
