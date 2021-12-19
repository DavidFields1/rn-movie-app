import { useEffect, useState } from "react";
import movieDB from "../api/movieDb";
import { Movie, MovieDbNowPlaying } from "../interface/movieDBInterface";

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([])

    const getMovies = async () => {
        const response = await movieDB.get<MovieDbNowPlaying>('/now_playing');
        const movies = response.data.results;
        setNowPlayingMovies(movies);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();

    }, [])

    return {
        nowPlayingMovies,
        isLoading
    }
}