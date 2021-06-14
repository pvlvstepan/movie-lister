import { AspectRatio, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const MovieCard = () => {
    return (
        <VStack align='start'>
            <AspectRatio ratio={2 / 3} w='full'>
                <Image rounded='xl' src='https://via.placeholder.com/1000x1440' />
            </AspectRatio>
            <Heading as='h3' fontSize='md'>Sample Movie Title</Heading>
            <Text >2020</Text>
        </VStack>
    );
};

export default MovieCard;
