export const MovieSearch = ({ query, search }) => {
  const searchHandler = (event) => {
    search(event.target.value);
  };

  return (
    <div className="box">
      <div className="field">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <div className="control">
          <input
            onChange={searchHandler}
            value={query}
            type="text"
            id="search-query"
            className="input"
            placeholder="Type search word"
          />
        </div>
      </div>
    </div>
  );
};
