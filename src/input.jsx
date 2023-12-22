export const Input = ({ valueChangedCallback }) => (
  <div className="control">
    <input
      type="text"
      id="search-query"
      className="input"
      placeholder="Type search word"
      // value={query}
      onChange={(evt) => {
        valueChangedCallback(evt.target.value);
      }}
    />
  </div>
);
