import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interface/movieDBInterface'

interface Props {
    movie: Movie
}

export const MoviePoster = ({ movie }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;

    return (
        <View style={{
            width: 300,
            height: 420,
            marginTop: 20,
        }}>
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10.32,
        elevation: 16,
    },
})

