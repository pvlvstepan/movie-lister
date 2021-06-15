import { AspectRatio, Box, Button, Center, Heading, Image, VStack } from '@chakra-ui/react';
import { Fade } from "@chakra-ui/react";
import { FaPlay } from 'react-icons/fa';
import React from 'react';
import { useHistory } from 'react-router-dom';

const ReleaseCard = ({ show, title, img, id, youtube }) => {

    const history = useHistory();

    return (
        <Box as={Fade} in={show} w='full' pos='relative' display={show ? 'block' : 'none'} color='white'>
            <AspectRatio ratio={16 / 9}>
                <Image rounded='xl' src={img} />
            </AspectRatio>
            <Center as={VStack} spacing={6} pos='absolute' w='full' h='full' inset={0}>
                <Heading as='h1' fontSize='3xl' textAlign='center' textShadow='dark-lg'>{title}</Heading>
                <Button onClick={() => history.push("?movie_id=" + id)} colorScheme='green' boxShadow='dark-lg'>Download Now</Button>
                <Button textColor='white' leftIcon={<FaPlay />} boxShadow='dark-lg' colorScheme='green' variant='outline'>Watch Trailer</Button>
            </Center>
        </Box>
    );
};

export default ReleaseCard;
