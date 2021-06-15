import { GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import NewRelease from './NewRelease';
import RecentlyAdded from './RecentlyAdded';
import TopMovies from './TopMovies';

const Home = () => {
    return (
        <SimpleGrid columns={4} row={1} spacing={6}>
            <GridItem colSpan={1}>
                <RecentlyAdded />
            </GridItem>
            <GridItem colSpan={3} bg='gray.700' px={6} rounded='xl'>
                <NewRelease />
                <TopMovies type='rating' />
                <TopMovies type='like_count' />
                <TopMovies type='download_count' />
            </GridItem>
        </SimpleGrid>
    );
};

export default Home;
