import { Heading, HStack, Input } from '@chakra-ui/react';
import { ImVideoCamera } from 'react-icons/im';
import React from 'react';

const Navbar = () => {
    return (
        <HStack as='header' py={6}>
            <HStack fontSize='4xl' maxW='220px' w='full'>
                <ImVideoCamera />
                <Heading as='h2' fontSize='2xl'>MovieLister</Heading>
            </HStack>
            <Input placeholder='Search Movies' variant='filled'></Input>
        </HStack>
    );
};

export default Navbar;
