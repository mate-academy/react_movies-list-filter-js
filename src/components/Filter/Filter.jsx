export function Filter({ query, filterOn }) {
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
            value={query}
            className="input"
            placeholder="Type search word"
            onChange={event => filterOn(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
