export const SearchControl = ({
  onChange = () => {},
  value = '',
}) => (
  <div className="control">
    <input
      type="text"
      id="search-query"
      className="input"
      placeholder="Type search word"
      value={value}
      onChange={onChange}
    />
  </div>
);
