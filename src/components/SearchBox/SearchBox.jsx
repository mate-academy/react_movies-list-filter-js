export const SearchBox = ({ onQueryChange }) => (
  <div className="box">
    <div className="field">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          id="search-query"
          placeholder="Type search word"
          onChange={event => onQueryChange(event.target.value)}
          className="input"
        />
      </div>
    </div>
  </div>
);
