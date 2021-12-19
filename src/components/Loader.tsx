import React from 'react'
import { ActivityIndicator, View } from 'react-native'

interface Props {
    size: number
}

const Loader = ({ size }: Props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <ActivityIndicator size={size} color="#0000ff" />
        </View>
    )
}

export default Loader
