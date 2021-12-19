import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interface/movieDBInterface'
import { RootStackParamList } from '../navigation/Navigation';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 400, width = 285 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            style={{
                width: (width),
                height: (height),
                marginTop: 8,
                marginHorizontal: 7,
            }}
            onPress={() => { navigation.navigate('DetailScreen', { movie }) }}
        >
            <Image source={{ uri }} style={styles.image} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
})

