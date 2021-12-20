import React, { createContext, useState } from 'react'

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setGradientMainColors: (colors: ImageColors) => void;
    setGradientPrevColors: (colors: ImageColors) => void;
}


export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }:any) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    })

    const setGradientMainColors = (colors: ImageColors) => {
        setColors(colors);
    }

    const setGradientPrevColors = (colors: ImageColors) => {
        setPrevColors(colors);
    }

    return(
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setGradientMainColors,
            setGradientPrevColors,
        }}>
            {children}
        </GradientContext.Provider>
    )
}
