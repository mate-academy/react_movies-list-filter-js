export const Searchbar = ({ querry, setQuerry }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        onChange={(event) => {
          setQuerry(event.target.value);
        }}
      />
    </div>
  </div>
);
