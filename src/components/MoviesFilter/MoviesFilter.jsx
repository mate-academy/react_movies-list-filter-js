export const MoviesFilterQuery = ({ query, setQuery }) => {
  return (
    <>
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
        />
      </div>
    </>
  )
}
