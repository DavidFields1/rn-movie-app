import { useEffect, useState } from "react";
import movieDB from "../api/movieDb";
import { Movie, MovieDbMoviesResponse } from "../interface/movieDBInterface";

export const useMovies = ( category: string ) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async () => {
        try {
            const response = await movieDB.get<MovieDbMoviesResponse>(category);
            const movies = response.data.results;
            setMovies(movies);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        movies,
        isLoading,
    }
}