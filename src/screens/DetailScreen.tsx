import React from 'react'
import { Text, View } from 'react-native'
import { Movie } from '../interface/movieDBInterface';

interface Props {
    movie: Movie;
}

export const DetailScreen = (navigation: any) => {
    console.log(JSON.stringify(navigation.route.params.movie, null, 3));
    
    return (
        <View>
            <Text>Details Screen</Text>
            {/* <Text>{movie.title}</Text> */}
        </View>
    )
}
