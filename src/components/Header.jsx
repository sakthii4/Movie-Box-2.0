import React, { useState } from 'react';
import { Search, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
            navigate('/');
        }
    };

    return (
        <header className="bg-secondary/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <Film className="w-8 h-8 text-accent" />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        MovieBox
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="relative w-full max-w-md hidden md:block">
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-primary/50 border border-white/10 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-accent transition-colors text-white placeholder-gray-400"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </form>

                {/* Mobile Search Icon (could expand to a modal or input) */}
                <button className="md:hidden text-white">
                    <Search className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
};

export default Header;
