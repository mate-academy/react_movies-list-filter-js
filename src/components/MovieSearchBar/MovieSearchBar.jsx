export const MovieSearchBar = ({ setQuery }) => {
  return (
    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        onChange={e => setQuery(e.target.value)}
        placeholder="Type search word"
      />
    </div>
  );
};
