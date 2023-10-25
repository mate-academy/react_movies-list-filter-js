export const SortField = ({ filterBy }) => (
  <div className="control">
    <input
      onChange={(event) => {
        filterBy(event.target.value);
      }}
      type="text"
      id="search-query"
      className="input"
      placeholder="Type search word"
    />
  </div>
);
