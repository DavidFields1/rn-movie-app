import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image,StyleSheet,TouchableOpacity } from 'react-native'
import { Movie } from '../interface/movieDBInterface'
interface Props {
    movie: Movie;
    height?: number;
    width?: number;
    borderRadius?: boolean;
}

export const MoviePoster = ({ movie, height = 400, width = 285, borderRadius = false}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            style={{
                ...styles.container,
                width: (width),
                height: (height),
                borderTopStartRadius: (borderRadius) ? 15 : 0,
                borderTopEndRadius: (borderRadius) ? 15 : 0,
                flex: 1,
            }}
            onPress={() => { navigation.navigate('DetailScreen', movie) }}
        >
            <Image source={{ uri }} style={
                styles.image                
            } />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        marginHorizontal: 5,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    }
})

