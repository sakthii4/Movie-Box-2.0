import React, { useEffect, useState } from 'react';
import { searchMovies } from '../services/api';
import MovieCard from './MovieCard';

const CategorySection = ({ title, keyword }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await searchMovies(keyword);
            if (data.Response === "True") {
                setMovies(data.Search);
            }
            setLoading(false);
        };
        fetchMovies();
    }, [keyword]);

    if (loading) return <div className="h-64 flex items-center justify-center text-gray-400">Loading {title}...</div>;
    if (movies.length === 0) return null;

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-accent pl-4">{title}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {movies.slice(0, 5).map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
