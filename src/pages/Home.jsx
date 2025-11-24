import React from 'react';
import CategorySection from '../components/CategorySection';
import MovieCard from '../components/MovieCard';

const Home = ({ searchResults }) => {
    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section (Optional, could be static or dynamic) */}
            <div className="relative h-[400px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                        Discover <span className="text-accent">Cinema</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Explore the latest movies, trending series, and timeless classics.
                    </p>
                </div>
            </div>

            {/* Search Results or Categories */}
            {searchResults && searchResults.length > 0 ? (
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Search Results</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {searchResults.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <CategorySection title="Popular Action" keyword="action" />
                    <CategorySection title="Marvel Universe" keyword="marvel" />
                    <CategorySection title="Sci-Fi Hits" keyword="star wars" />
                    <CategorySection title="Comedy" keyword="comedy" />
                    <CategorySection title="Tamil Movies" keyword="tamil" />
                </>
            )}
        </div>
    );
};

export default Home;
