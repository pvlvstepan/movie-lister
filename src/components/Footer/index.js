import { Heading, HStack, Link, Text, VStack, Wrap } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { ImVideoCamera } from 'react-icons/im';

const Footer = () => {
    return (
        <Wrap spacing={3} w='full' justify='space-between' align='center' mb={6}>
            <VStack>
                <Text align='left'>Designed & Developed by <Link fontWeight='semibold' href='https://stepanpavlov.com' isExternal='true'>Stepan Pavlov</Link></Text>
                <Text align='left' w='full'>Movies Source: <Link fontWeight='semibold' href='https://yts.mx/' isExternal='true'>YTS.mx</Link></Text>
            </VStack>
            <HStack as={RouterLink} to='/' fontSize='4xl'>
                <ImVideoCamera />
                <Heading as='h2' fontSize='2xl'>MovieLister</Heading>
            </HStack>
        </Wrap>
    );
};

export default Footer;
