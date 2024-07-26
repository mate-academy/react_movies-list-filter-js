export function SearchBar({ onQueryChange }) {
  const handleQueryChange = event => {
    const newQuery = event.target.value.trim();

    onQueryChange(newQuery);
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
            onChange={handleQueryChange}
            type="text"
            id="search-query"
            className="input"
            placeholder="Type search word"
          />
        </div>
      </div>
    </div>
  );
}
