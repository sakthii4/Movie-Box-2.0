import axios from 'axios';

const API_KEY = 'b28c9060';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error("Error searching movies:", error);
        return { Response: "False", Error: error.message };
    }
};

export const getMovieDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}&plot=full`);
        return response.data;
    } catch (error) {
        console.error("Error getting movie details:", error);
        return { Response: "False", Error: error.message };
    }
};
