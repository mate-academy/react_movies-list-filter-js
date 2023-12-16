import './MovieInput.scss';

export const MovieInput = ({ inputValue, handler }) => (
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
        value={inputValue}
        onChange={e => handler(e.target.value)}
      />
    </div>
  </div>
);
