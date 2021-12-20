import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MoviePoster } from '../components/MoviePoster';
import { RootStackParamList } from '../navigation/Navigation';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'>{}

const { width, height } = Dimensions.get('window');

export const DetailScreen = ({ route, navigation }: Props) => {
    
    const movie = route.params;

    const { cast, isLoading, movieDetails } = useMovieDetails(movie.id);
    
    return (
        <ScrollView>
            <View style={{ alignSelf: 'center' }}>
                <MoviePoster movie={movie} height={height * 0.7} width={width}/>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {movie.title}
                    </Text>
                </View>
                {
                    (isLoading) 
                    ? <ActivityIndicator size={45} color={'#000'} style={{ alignSelf: 'center', marginTop: 40 }}/>
                    : <MovieDetails movie={movieDetails!} cast={cast} />
                }
            </View>
            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Icon 
                    name='arrow-back-outline'
                    size={40}
                    color='#fff'
                />
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        paddingTop: 10,
        paddingLeft: 10,
        marginBottom: 3,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    backButton: {
        position: 'absolute', 
        top: 10, 
        left: 10, 
        zIndex: 999, 
        elevation: 9
    }
})

