export const Field = ({ filterBy, query, setQuery }) => (
  <div className="field">
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label
      htmlFor="search-query"
      className="label"
    >
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        value={query}
        filterBy={newQuery => setQuery(newQuery)}
        onChange={(event) => {
          filterBy(event.currentTarget.value);
        }}
      />
    </div>
  </div>
);
