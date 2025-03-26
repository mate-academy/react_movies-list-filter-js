/* eslint-disable react/no-danger */
import './MovieCard.scss';

export const MovieCard = ({ movie, query }) => {
  const highlightedTitle = movie.title.replaceAll(
    new RegExp(query, 'gi'),
    match => `<span style="background: yellow">${match}</span>`,
  );

  const highlightedDescription = movie.description.replaceAll(
    new RegExp(query, 'gi'),
    match => `<span style="background: yellow">${match}</span>`,
  );

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={movie.imgUrl} alt="Film logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8">
              <span dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
            </p>
          </div>
        </div>

        <div className="content">
          <span dangerouslySetInnerHTML={{ __html: highlightedDescription }} />
          <br />
          <a href={movie.imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
  );
};
