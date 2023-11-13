export const SearchField = ({ filterBy, query }) => (
  <div className="box">
    <div className="field">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          value={query}
          // eslint-disable-next-line no-restricted-globals
          onChange={() => filterBy(event.target.value)}
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
        />
      </div>
    </div>
  </div>
);
