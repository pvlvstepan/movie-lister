import { Badge, Box, Flex, Heading, HStack, Link, Spacer } from '@chakra-ui/react';
import React from 'react';

const ReleaseHeader = () => {
    return (
        <Flex direction='row' w='full' align='center' py={6}>
            <HStack spacing={3}>
                <Heading as='h1' fontSize='3xl'>New Releases</Heading>
                <Badge colorScheme='green' fontSize='xl'>New</Badge>
            </HStack>
            <Spacer />
            <Link>See All</Link>
        </Flex>
    );
};

export default ReleaseHeader;
