import cn from 'classnames';
import { SORT_FIELD } from '../../constants';

export const Box = ({ sortField, sortBY, searchquery, filterBy }) => (
  <div className="box">
    <div className="bb">
      <button
        type="button"
        className="button"
        onClick={() => {
          sortBY('');
          filterBy('');
        }}
      >
        Reset
      </button>
      Search by only:
      <button
        type="button"
        className={cn`button ${sortField === SORT_FIELD.TITLE ? 'button__active' : ''}`}
        onClick={() => sortBY(SORT_FIELD.TITLE)}
      >
        title
      </button>
      <button
        type="button"
        className={cn`button ${sortField === SORT_FIELD.DESCRIPTION ? 'button__active' : ''}`}
        onClick={() => sortBY(SORT_FIELD.DESCRIPTION)}
      >
        description
      </button>
    </div>

    <div className="field">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="search-query" className="label">
        Search movie
      </label>
      <div className="control">
        <input
          value={searchquery}
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
          onChange={event => {
            filterBy(event.target.value);
          }}
        />
      </div>
    </div>
  </div>
);
