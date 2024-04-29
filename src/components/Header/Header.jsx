export const Header = ({ setQuery }) => {
  return (
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
            className="input"
            placeholder="Type search word"
            onChange={event => {
              setQuery(event.currentTarget.value.trim());
            }}
          />
        </div>
      </div>
    </div>
  );
};
