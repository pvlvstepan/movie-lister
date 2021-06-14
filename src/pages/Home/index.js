import { Box } from '@chakra-ui/react';
import React from 'react';
import NewRelease from './NewRelease';
import TopMovies from './TopMovies';

const Home = () => {
    return (
        <Box as='section' flex='50%'>
            <NewRelease />
            <TopMovies type='rating' />
            <TopMovies type='like_count' />
            <TopMovies type='download_count' />
        </Box>
    );
};

export default Home;
