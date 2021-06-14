import { Box } from '@chakra-ui/react';
import React from 'react';
import NewRelease from './NewRelease';
import TopRated from './TopRated';

const Home = () => {
    return (
        <Box as='section' flex='60%'>
            <NewRelease />
            <TopRated />
        </Box>
    );
};

export default Home;
