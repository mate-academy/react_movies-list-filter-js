export const SearchBar = ({ querry, setQuerry }) => {
  return (
    <div className="box">
      <div className="field">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <div className="control">
          <input
            value={querry}
            type="text"
            id="search-query"
            className="input"
            placeholder="Type search word"
            onChange={event => {
              setQuerry(event.currentTarget.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
