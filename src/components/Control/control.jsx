export const Control = ({ searchQuery, setSearchQuery }) => (
  <div className="control">
    <input
      type="text"
      id="search-query"
      className="input"
      placeholder="Type search word"
      onChange={event => setSearchQuery(event.target.value.trim())}
    />
  </div>
);
