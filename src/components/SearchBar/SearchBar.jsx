export const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="field">
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="input"
        placeholder="Type search word"
      />
    </div>
  </div>
);
