export const SearchBar = ({ setQuery }) => (
  <div className="box">
    <div className="field">

      <h3 className="label">
        Search movie
      </h3>

      <div className="control">
        <input
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
    </div>
  </div>
);
