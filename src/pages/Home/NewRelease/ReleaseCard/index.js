import { AspectRatio, Box, Button, Center, Heading, Image, VStack } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import React from 'react';

const ReleaseCard = () => {
    return (
        <Box w='full' pos='relative'>
            <AspectRatio ratio={16 / 9}>
                <Image rounded='xl' src='https://via.placeholder.com/1280x720' />
            </AspectRatio>
            <Center as={VStack} spacing={6} pos='absolute' w='full' h='full' inset={0}>
                <Heading as='h1' fontSize='5xl'>Game Of Thrones (2020)</Heading>
                <Button colorScheme='red'>Download Now</Button>
                <Button leftIcon={<FaPlay />} colorScheme='red' variant='outline'>Watch Trailer</Button>
            </Center>
        </Box>
    );
};

export default ReleaseCard;
