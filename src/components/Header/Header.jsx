export const Header = ({ filterBy }) => (
  <div className="box">
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
            filterBy(event.currentTarget.value.toLowerCase());
          }}
        />
      </div>
    </div>
  </div>
);
