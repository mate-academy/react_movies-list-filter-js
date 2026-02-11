export const Field = ({ query, setQuery }) => {
  return (
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          value={query}
          onChange={event => {
            setQuery(event.target.value);
          }}
          id="search-query"
          className="input"
          placeholder="Type search word"
        />
      </div>
    </div>
  );
};
