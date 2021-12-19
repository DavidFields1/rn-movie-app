import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Movie } from '../interface/movieDBInterface'
import { MoviePoster } from './MoviePoster'

interface Props {
    movies: Movie[],
    windowWidth: number,
}

export const CarouselWithPagination = ({ movies, windowWidth }: Props) => {

    const [activeSlide, setActiveSlide] = React.useState(0);

    return (
        <>
            <Carousel
                data={movies}
                renderItem={({ item }) => <MoviePoster movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={300}
                onSnapToItem={(index) => setActiveSlide(index)}
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
