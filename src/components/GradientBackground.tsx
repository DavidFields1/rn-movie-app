import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {

    const { colors, prevColors, setGradientPrevColors } = useContext(GradientContext);
    const { fadeIn, fadeOut, opacity } = useFade();

    useEffect(() => {
        fadeIn(() => {
            setGradientPrevColors(colors);
            fadeOut();
        })
    }, [colors])

    return (
        
            <View style={{ flex: 1}}>
                <LinearGradient 
                    colors={[prevColors.primary, prevColors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x:1, y:0 }}
                    end={ { x: 0.7, y: 0.7 }}
                />
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        opacity
                    }}
                    >
                        
                            <LinearGradient 
                                colors={[colors.primary, colors.secondary, 'white']}
                                style={{ ...StyleSheet.absoluteFillObject }}
                                start={{ x:1, y:0 }}
                                end={ { x: 0.7, y: 0.7 }}
                                />
                            
                </Animated.View>

                { children }
            </View>

            
        
    )
}

export default GradientBackground
