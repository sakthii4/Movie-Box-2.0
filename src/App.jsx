import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import { searchMovies } from './services/api';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const data = await searchMovies(query);
    if (data.Response === "True") {
      setSearchResults(data.Search);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-primary text-white font-sans">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home searchResults={searchResults} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
