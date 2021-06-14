import { SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import MovieCard from '../../../components/MovieCard';
import TopRatedHeader from './TopRatedHeader';

const TopRated = () => {
    return (
        <VStack>
            <TopRatedHeader />
            <SimpleGrid w='full' columns={3} row={2} spacing={6}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </SimpleGrid>
        </VStack>
    );
};

export default TopRated;
