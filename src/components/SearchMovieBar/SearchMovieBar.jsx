export const SearchMovieBar = ({ sortBy }) => {
  function setSortBy(event) {
    const eventValue = (event.target.value).trim().toLowerCase();

    return sortBy(eventValue);
  }

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
            onChange={setSortBy}
          />
        </div>
      </div>
    </div>
  );
};
