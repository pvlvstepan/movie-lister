import { Badge, Box, Flex, Heading, HStack, Button, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Link } from "react-router-dom";
const ReleaseHeader = () => {
    return (
        <Flex direction='row' w='full' align='center' py={6}>
            <HStack spacing={3}>
                <Heading as='h1' fontSize='3xl'>New Releases</Heading>
                <Badge rounded='lg' colorScheme='green' fontSize='xl'>New</Badge>
            </HStack>
            <Spacer />
            <Button as={Link} to='/movies/new' size='sm'>See All</Button>
        </Flex>
    );
};

export default ReleaseHeader;
