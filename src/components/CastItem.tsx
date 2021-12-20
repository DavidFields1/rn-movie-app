import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interface/movieCastInterface'

interface Props {
    actor: Cast
}

const CastItem = ({ actor }: Props) => {
    
    
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    console.log(uri);

    return (
        <View>
            <View style={styles.mainContainer}>
                {
                    actor.profile_path 
                    ? <Image source={{ uri }} style={{ height: 120, width: 110}} />
                    : <Image source={{ uri: 'https://multilingual.com/wp-content/uploads/avatar-placeholder-generic.png'}} style={{ height: 120, width: 110}} />
                }
                <View style={styles.castDetails}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                        {actor.name}
                    </Text>
                    <Text style={{ fontSize: 15, color: 'grey'}}>
                        {actor.character}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default CastItem

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        overflow: 'hidden',
        width: 110,
        marginVertical: 10,
        marginRight: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.82,
        shadowRadius: 1.46,
        
        elevation: 9,
        
    },
    castDetails: {
        padding: 10,
        backgroundColor: '#fff',
    }
})
