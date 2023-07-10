export const SearchFilm = ({
  query,
  filterBy,
  changeQuery = event => filterBy(event.target.value),
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
        onChange={changeQuery}
      />
    </div>
  </div>
);
