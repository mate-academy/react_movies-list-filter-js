export const MovieFilter = ({ query, setFilter }) => (
  <div className="control">
    <input
      value={query}
      type="text"
      id="search-query"
      className="input"
      placeholder="Type search word"
      onChange={event => setFilter(event.target.value)}
    />
  </div>
);
