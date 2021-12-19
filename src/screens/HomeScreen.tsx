import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import Loader from '../components/Loader';
import { useMovies } from '../hooks/useMovies';
import { CarouselWithPagination } from '../components/CarouselWithPagination';
import { MoviePoster } from '../components/MoviePoster';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlayingMovies, isLoading } = useMovies();
    

    if(isLoading) {
        return(
            <Loader size={60} />
        )
    }

    return (
        <View>
            {/* <MoviePoster movie={nowPlayingMovies[0]}/> */}
            <CarouselWithPagination 
                movies={nowPlayingMovies}
                windowWidth={windowWidth}
            />
            <View style={{ height: 205, backgroundColor: 'red'}}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                }}>Now Playing</Text>
                <FlatList 
                    data={nowPlayingMovies}
                    renderItem={({ item }) => <MoviePoster movie={item} />}
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}
