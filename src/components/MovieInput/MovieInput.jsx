import './MovieInput.scss';

export const MovieInput = ({ setQuery, query }) => {
  return (
    <div className="box">
      <div className="field">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <div className="control">
          <input
            value={query}
            type="text"
            id="search-query"
            className="input"
            placeholder="Type search word"
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
