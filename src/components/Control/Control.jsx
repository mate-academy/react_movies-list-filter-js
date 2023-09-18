export const Control = ({
  query,
  onQueryChange,
}) => (
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
        onChange={(event) => {
          onQueryChange(event.currentTarget.value);
        }}
      />
    </div>
  </div>
);
