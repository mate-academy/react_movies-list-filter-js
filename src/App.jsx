import React, { useState } from 'react';
import './App.scss';
import MoviesList from './MoviesList';

const moviesFromServer = [
    {
        id: 1,
        title: 'Inception',
        description: 'A thief who steals corporate secrets through dream-sharing technology.',
    },
    {
        id: 2,
        title: 'Interstellar',
        description: 'A team of explorers travel through a wormhole in space to ensure humanity\'s survival.',
    },
    {
        id: 3,
        title: 'The Dark Knight',
        description: 'Batman sets out to dismantle the remaining criminal organizations that plague Gotham.',
    },
];

function App() {
    const [query, setQuery] = useState('');

    // Filtered movies based on query
    const visibleMovies = moviesFromServer.filter(movie => {
        const lowerCaseQuery = query.trim().toLowerCase();

        return (
            movie.title.toLowerCase().includes(lowerCaseQuery) ||
            movie.description.toLowerCase().includes(lowerCaseQuery)
        );
    });

    return (
        <div className="App">
            <h1 className="title">Movies List</h1>

            {/* Search input field */}
            <input
                type="text"
                className="input"
                placeholder="Search movies..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />

            {/* Movies list filtered by query */}
            <MoviesList movies={visibleMovies} />
        </div>
    );
}

export default App;
