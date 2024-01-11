export const Control = ({
  query,
  filterBy,
}) => (
  <div className="control">
    <input
      value={query}
      type="text"
      id="search-query"
      className="input"
      placeholder="Type search word"
      onChange={(event) => {
        filterBy(event.currentTarget.value);
      }}
    />
  </div>
);
