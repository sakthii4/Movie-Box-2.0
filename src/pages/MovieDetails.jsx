import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails, searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import { Star, Calendar, Clock, ArrowLeft } from 'lucide-react';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [relatedMovies, setRelatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getMovieDetails(id);
            if (data.Response === "True") {
                setMovie(data);
                // Fetch related movies based on the first genre
                const genre = data.Genre ? data.Genre.split(',')[0].trim() : 'Action';
                const related = await searchMovies(genre);
                if (related.Response === "True") {
                    setRelatedMovies(related.Search.filter(m => m.imdbID !== id));
                }
            }
            setLoading(false);
        };
        fetchData();
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    if (!movie) return <div className="min-h-screen flex items-center justify-center text-white">Movie not found</div>;

    return (
        <div className="min-h-screen pb-20">
            {/* Backdrop */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10"></div>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/1920x1080'}
                    alt={movie.Title}
                    className="w-full h-full object-cover blur-sm opacity-50"
                />
                <div className="absolute top-4 left-4 z-20">
                    <Link to="/" className="flex items-center gap-2 text-white hover:text-accent transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-md">
                        <ArrowLeft className="w-5 h-5" /> Back
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 -mt-32 relative z-20">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Poster */}
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <img
                            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
                            alt={movie.Title}
                            className="w-full rounded-xl shadow-2xl border-4 border-white/10"
                        />
                    </div>

                    {/* Details */}
                    <div className="w-full md:w-2/3 lg:w-3/4 text-white pt-4 md:pt-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">{movie.Title}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {movie.Year}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {movie.Runtime}</span>
                            <span className="flex items-center gap-1 text-yellow-400"><Star className="w-4 h-4 fill-current" /> {movie.imdbRating}</span>
                            <span className="bg-white/10 px-2 py-0.5 rounded text-sm">{movie.Rated}</span>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-accent">Plot</h3>
                            <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="text-accent font-semibold mb-1">Genre</h3>
                                <p>{movie.Genre}</p>
                            </div>
                            <div>
                                <h3 className="text-accent font-semibold mb-1">Director</h3>
                                <p>{movie.Director}</p>
                            </div>
                            <div>
                                <h3 className="text-accent font-semibold mb-1">Cast</h3>
                                <p>{movie.Actors}</p>
                            </div>
                            <div>
                                <h3 className="text-accent font-semibold mb-1">Awards</h3>
                                <p>{movie.Awards}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Movies */}
                {relatedMovies.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-accent pl-4">Related Movies</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {relatedMovies.slice(0, 5).map((m) => (
                                <MovieCard key={m.imdbID} movie={m} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieDetails;
