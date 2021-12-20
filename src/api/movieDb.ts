import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a11560c6b0a5161eed14e2eeb8aee239',
        language: 'en-US',
    },
});

export default movieDB;