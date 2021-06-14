import { Box } from '@chakra-ui/react';
import React from 'react';
import NewRelease from '../../components/NewRelease';

const Home = () => {
    return (
        <Box as='section'>
            <NewRelease />
        </Box>
    );
};

export default Home;
