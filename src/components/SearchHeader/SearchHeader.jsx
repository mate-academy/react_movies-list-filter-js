
export const SearchHeader = ({ filterBy }) => (
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
        onChange={(request) => {
          filterBy(request.currentTarget.value);
        }}
      />
    </div>
  </div>
);
