export const Field = ({ filterBy }) => (
  <div className="field">
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        onChange={event => {
          filterBy(event.target.value);
        }}
        id="search-query"
        className="input"
        placeholder="Type search word"
      />
    </div>
  </div>
);
