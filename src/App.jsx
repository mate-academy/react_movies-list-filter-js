import { useState, useMemo } from 'react';
import moviesData from './api/movies.json';

const MovieCard = ({ movie }) => {
  const handleImageError = event => {
    const { target } = event;

    target.onerror = null;
    target.src = 'https://placehold.co/300x400/888/fff?text=No+Image';
  };

  return (
    <div className="card bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={movie.imgUrl}
          alt="Film logo"
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="w-12 h-12 flex-shrink-0 mr-3">
            <img
              src="https://placehold.co/48x48/F5C518/000?text=IMDb"
              alt="imdb logo"
              className="rounded-full w-full h-full object-cover"
            />
          </div>

          <div className="flex-grow">
            <p
              className="title text-lg font-bold text-gray-800
                         leading-tight"
            >
              {movie.title}
            </p>
          </div>
        </div>

        <div className="text-sm text-gray-600 space-y-2">
          <p>{movie.description}</p>
          <a
            href={movie.imdbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-500 hover:text-blue-700
                       font-medium mt-2"
          >
            IMDB
          </a>
        </div>
      </div>
    </div>
  );
};

const MoviesList = ({ movies }) => (
  <div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
               lg:grid-cols-4 gap-6 mt-6"
  >
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);

export const App = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.target.value);
  };

  const visibleMovies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery.length === 0) {
      return moviesData;
    }

    return moviesData.filter(movie => {
      const titleMatch = movie.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = movie.description
        .toLowerCase()
        .includes(normalizedQuery);

      return titleMatch || descriptionMatch;
    });
  }, [query]);

  const hasMovies = visibleMovies.length > 0;
  const isSearching = query.trim().length > 0;

  let content;

  if (hasMovies) {
    content = <MoviesList movies={visibleMovies} />;
  } else if (isSearching) {
    content = (
      <p
        className="text-center text-xl text-gray-600 p-8 bg-white
                   rounded-xl shadow mt-6"
      >
        На жаль, фільми за запитом &quot;{query}&quot; не знайдено.
      </p>
    );
  } else {
    content = (
      <p
        className="text-center text-xl text-gray-600 p-8 bg-white
                   rounded-xl shadow mt-6"
      >
        Список фільмів завантажено.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans antialiased">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:flex-grow">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="mb-4">
              <label
                htmlFor="search-query"
                className="block text-lg font-bold text-gray-800 mb-2"
              >
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="w-full p-3 border border-gray-300 rounded-lg
                             focus:ring-2 focus:ring-blue-500
                             focus:border-blue-500 transition duration-150"
                  placeholder="Type search word"
                  value={query}
                  onChange={handleQueryChange}
                />
              </div>
            </div>
          </div>

          {content}
        </div>

        <div
          className="lg:w-64 bg-white p-6 rounded-xl shadow-lg border
                     border-gray-200 flex-shrink-0"
        >
          Sidebar goes here
        </div>
      </div>
    </div>
  );
};
