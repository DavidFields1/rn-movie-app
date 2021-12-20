import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDb';
import { Cast, MovieCreditsResponse } from '../interface/movieCastInterface';
import { MovieDetailsResponse } from '../interface/movieDetailsInterface';

interface MovieDetails {
    movieDetails: MovieDetailsResponse | undefined;
    cast: Cast[];
    isLoading: boolean;
}

const useMovieDetails = (movieId: number): MovieDetails => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails>({
        movieDetails: undefined,
        cast: [],
        isLoading: true,
    })

    const getMovieDetails = async () => {
        const movieDetailsResponse = await movieDB.get<MovieDetailsResponse>(`/${movieId}`)
        const creditsResponse = await movieDB.get<MovieCreditsResponse>(`/${movieId}/credits`)
        setMovieDetails({
            movieDetails: movieDetailsResponse.data,
            cast: creditsResponse.data.cast,
            isLoading: false,
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...movieDetails
    }
}

export default useMovieDetails
