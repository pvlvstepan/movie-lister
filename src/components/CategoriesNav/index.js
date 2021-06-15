import { VStack, Heading, Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import categories from '../../data/categories';
import toProperCase from '../../functions/toProperCase';

const CategoriesNav = () => {

    return (
        <VStack py={6} w='full' align='start' ml={6} spacing={6}>
            <Heading textTransform='uppercase' as='h4' fontSize='md'>Categories</Heading>
            <Box as='hr' w='full' />
            <VStack spacing={1} align='start' w='full' fontSize='md' fontWeight='normal'>
                <Link as={RouterLink} to='/movies/all'>All Movies</Link>
                <Link as={RouterLink} to='/movies/new'>New Releases</Link>
                <Link as={RouterLink} to='/movies/recent'>Recently Added</Link>
                <Link as={RouterLink} to='/movies/rating'>Top Rated</Link>
                <Link as={RouterLink} to='/movies/likes'>Top Likes</Link>
                <Link as={RouterLink} to='/movies/downloads'>Top Downloads</Link>
            </VStack>
            <Heading textTransform='uppercase' as='h4' fontSize='md'>Genres</Heading>
            <Box as='hr' w='full' />
            <VStack spacing={1} align='start' w='full' fontSize='md' fontWeight='normal'>
                {categories.map((val, key) => {
                    return (
                        <Link as={RouterLink} to={'/movies/' + val} key={key}>{toProperCase(val)}</Link>
                    );
                })}
            </VStack>
        </VStack>
    );
};

export default CategoriesNav;
