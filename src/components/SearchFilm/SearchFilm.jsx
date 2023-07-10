export const SearchFilm = ({
  query,
  setQuery,
  filterBy,
}) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        value={query}
        onChange={(event) => {
          filterBy(event.target.value);
        }}
      />
    </div>
  </div>
);
