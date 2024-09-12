export const Box = ({ query, onQuery }) => (
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
          value={query}
          onChange={event => {
            onQuery(event.target.value);
          }}
        />
      </div>
    </div>
  </div>
);
