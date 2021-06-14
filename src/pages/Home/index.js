import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import NewRelease from './NewRelease';
import RecentlyAdded from './RecentlyAdded';
import TopMovies from './TopMovies';

const Home = () => {
    return (
        <HStack align='start' spacing={6}>
            <RecentlyAdded />
            <Box width='full' bg='gray.700' px={6}>
                <NewRelease />
                <TopMovies type='rating' />
                <TopMovies type='like_count' />
                <TopMovies type='download_count' />
            </Box>
            <Box width='220px'>
                Categories
            </Box>
        </HStack>
    );
};

export default Home;
