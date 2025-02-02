export const MovieFilter = ({ query, onQuery }) => (
  <div className="box">
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          value={query}
          onChange={event => {
            onQuery(event.currentTarget.value);
          }}
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
        />
      </div>
    </div>
  </div>
);
