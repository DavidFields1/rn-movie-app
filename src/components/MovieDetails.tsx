import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interface/movieCastInterface';
import { MovieDetailsResponse } from '../interface/movieDetailsInterface';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movie: MovieDetailsResponse;
    cast: Cast[]
}

const MovieDetails = ({ movie, cast }: Props) => {
    return (
        <>
            <View style={styles.container}>
                <Icon name="star-outline" size={16} color="grey" style={styles.icon}/>
                <Text>{ movie.vote_average }</Text>
                <Text style={styles.genres}>
                    {
                        movie.genres.map((genre, idx) => {
                            if(idx > 2) return;
                            return genre.name
                        }).join(', ')
                    }
                </Text>
                <Icon name='calendar-outline' size={16} color="grey" style={styles.icon} />
                <Text>
                    { movie.release_date }
                </Text>
                
            </View>
            <View style={{ ...styles.container, marginLeft: 13, marginTop: 4 }}>
                <Icon name='cash-outline' size={16} color="grey" style={styles.icon} />
                <Text>{ currencyFormatter.format(movie.budget, { code: 'USD' }) }</Text>
            
            </View>
            <View style={{ marginTop: 13, marginHorizontal: 13 }}>
                <Text style={styles.subtitle}>Overview</Text>
                <Text>{ movie.overview }</Text>
            </View>
            <View style={{ marginTop: 13, marginHorizontal: 13 }}>
                <Text style={styles.subtitle}>Cast</Text>
                <FlatList 
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    
                />
                {/* <CastItem actor={cast[0]} /> */}
            </View>
            
        </>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        marginHorizontal: 13,
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
    },
    genres: {
        marginHorizontal: 13,
    },
    subtitle: {
        fontSize: 22,
        color: 'black',

    }
})

