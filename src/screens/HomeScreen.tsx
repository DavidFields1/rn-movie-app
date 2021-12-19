import React from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import Loader from '../components/Loader';
import { useMovies } from '../hooks/useMovies';
import { CarouselWithPagination } from '../components/CarouselWithPagination';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { movies: nowPlayingMovies, isLoading: isLoadingNowPlaying } = useMovies('now_playing');
    const { movies: popularMovies, isLoading: isLoadingPopular } = useMovies('popular');
    const { movies: topRatedMovies, isLoading: isLoadingTopRated } = useMovies('top_rated');
    const { movies: upcomingMovies, isLoading: isLoadingUpcoming } = useMovies('upcoming');
    

    if(isLoadingNowPlaying || isLoadingPopular || isLoadingTopRated || isLoadingUpcoming) {
        return(
            <Loader size={60} />
        )
    }

    return (
        <ScrollView>
            <View>
                <CarouselWithPagination 
                    movies={nowPlayingMovies}
                    windowWidth={windowWidth}
                />
                <HorizontalSlider movies={nowPlayingMovies} title="Now Playing" />
                <HorizontalSlider movies={popularMovies} title="Popular" />
                <HorizontalSlider movies={topRatedMovies} title="Top Rated" />
                <HorizontalSlider movies={upcomingMovies} title="Upcoming" />
            </View>
        </ScrollView>
    )
}
