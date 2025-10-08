export const SearchMovie = ({ setQuery }) => {
  return (
    <div className="box">
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
            onChange={event => {
              setQuery(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
