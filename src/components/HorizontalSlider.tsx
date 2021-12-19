import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interface/movieDBInterface'
import { MoviePoster } from './MoviePoster'

interface Props {
    movies: Movie[],
    title: string,
}

export const HorizontalSlider = ({ movies, title }:Props) => {
    return (
        <View style={{ height: 'auto', marginBottom: 10 }}>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginLeft: 10,
            }}>{ title }</Text>
            <FlatList
                data={movies}
                renderItem={({ item }) => {
                    return <MoviePoster movie={item} height={200} width={140}/>}
                }
                horizontal
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

