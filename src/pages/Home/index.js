import { Button, Center, GridItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import NewRelease from './NewRelease';
import RecentlyAdded from './RecentlyAdded';
import TopMovies from './TopMovies';

const Home = () => {
    return (
        <SimpleGrid columns={4} row={1} spacing={6} pb={6}>
            <GridItem colSpan={1}>
                <RecentlyAdded />
            </GridItem>
            <GridItem colSpan={3} bg={useColorModeValue('gray.300', 'gray.700')} px={6} rounded='xl' pb={6}>
                <NewRelease />
                <TopMovies type='rating' />
                <TopMovies type='like_count' />
                <TopMovies type='download_count' />
                <Center w='full'>
                    <Button as={Link} to='/movies/all' colorScheme='green'>Discover More Movies</Button>
                </Center>
            </GridItem>
        </SimpleGrid>
    );
};

export default Home;
