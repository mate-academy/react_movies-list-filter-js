export const Searchbar = ({ query, onFilterChange }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        value={query}
        onChange={e => {
          onFilterChange(e.target.value);
        }}
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
      />
    </div>
  </div>
);
