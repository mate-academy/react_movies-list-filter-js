export const SearchMovie = ({ query, filterBy }) => (
  <div className="SearchMovie">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        onChange={(event) => {
          filterBy(event.currentTarget.value);
        }}
        id="search-query"
        className="input"
        placeholder="Type search word"
      />
    </div>
  </div>
);
