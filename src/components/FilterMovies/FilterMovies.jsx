export const FilterMovies = ({ query, onQuery }) => (
  <div className="field">
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        value={query}
        onChange={event => {
          onQuery(event.target.value);
        }}
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
      />
    </div>
  </div>
);
