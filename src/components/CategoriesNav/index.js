import { VStack, Heading, Box, Link } from '@chakra-ui/react';
import React from 'react';

const CategoriesNav = () => {
    return (
        <VStack py={6} w='full' align='start' ml={6} spacing={6}>
            <Heading textTransform='uppercase' as='h4' fontSize='md'>Categories</Heading>
            <Box as='hr' w='full' />
            <VStack spacing={1} align='start' w='full'>
                <Link>New Releases</Link>
                <Link>Top Rated</Link>
                <Link>Top Likes</Link>
                <Link>Top Downloads</Link>
                <Link>Genres</Link>
            </VStack>
        </VStack>
    );
};

export default CategoriesNav;
