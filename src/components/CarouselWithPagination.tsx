import React, { useContext, useEffect } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Movie } from '../interface/movieDBInterface'
import { MoviePoster } from './MoviePoster'
import { getImageColors } from '../helpers/getImageColors';
import { GradientContext } from '../context/GradientContext';

interface Props {
    movies: Movie[],
    windowWidth: number,
}

export const CarouselWithPagination = ({ movies, windowWidth }: Props) => {

    const [activeSlide, setActiveSlide] = React.useState(0);
    const {setGradientMainColors, setGradientPrevColors} = useContext(GradientContext)

    const getPosterColors = async (index: number) => {
        const movie = movies[index];
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        
        const [primary = '#fff', secondary = '#000'] = await getImageColors(uri)
        
        setGradientMainColors({primary, secondary})
        
    }

    useEffect(() => {
        if(movies.length > 0){
            getPosterColors(0)
        }

    }, [movies])

    return (
        <>
            <Carousel
                data={movies}
                renderItem={({ item }) => <MoviePoster movie={item} borderRadius/>}
                sliderWidth={windowWidth}
                itemWidth={300}
                onSnapToItem={(index) => {getPosterColors(index); setActiveSlide(index)}}
            />
            <Pagination
                dotsLength={movies.length}
                activeDotIndex={activeSlide}
                containerStyle={{ width: 10, alignSelf: 'center' }}
                dotStyle={{
                    width: 7,
                    height: 7,
                    borderRadius: 5,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                dotContainerStyle={{
                    height: 0,
                }}
            />
        </>
    )
}
