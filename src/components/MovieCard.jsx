import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.imdbID}`} className="group relative block overflow-hidden rounded-xl bg-secondary transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
            <div className="aspect-[2/3] w-full overflow-hidden">
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
                    alt={movie.Title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-accent font-medium text-sm">{movie.Year}</span>
                    <h3 className="text-white font-bold text-lg leading-tight">{movie.Title}</h3>
                </div>
            </div>
            {/* Fallback for mobile or when not hovering if preferred, but the overlay is nicer */}
            <div className="p-4 md:hidden">
                <h3 className="text-white font-bold text-sm truncate">{movie.Title}</h3>
                <p className="text-gray-400 text-xs">{movie.Year}</p>
            </div>
        </Link>
    );
};

export default MovieCard;
