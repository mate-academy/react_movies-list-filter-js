import moviesFromServer from '../../../../api/movies.json';

export const Field = ({setQuery, setVisibleMovies}) => {
  const handleChange = (event) => {
    setQuery(event.target.value);
  }
  
  return(
      <>
      
      <div className="field">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="search-query" className="label">
            Search movie
          </label >
          <div className="control">
              <input
                onChange={handleChange}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
          </div>
      </div>
      
      </>
  )
}