export const SearchField = ({ filterBy }) => (
  <div className="control">
    <input
      type="text"
      id="search-query"
      className="input"
      placeholder="Type search word"
      onChange={(event) => {
        filterBy(event.target.value);
      }}
    />
  </div>
);
