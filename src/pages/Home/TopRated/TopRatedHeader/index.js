import { Spacer, Flex, Heading, HStack, IconButton } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React from 'react';

const TopRatedHeader = () => {
    return (
        <Flex direction='row' w='full' align='center' py={6}>
            <Heading as='h2' fontSize='2xl'>Top Rated</Heading>
            <Spacer />
            <HStack>
                <IconButton size='sm' icon={<FaArrowLeft />} />
                <IconButton size='sm' icon={<FaArrowRight />} />
            </HStack>
        </Flex>
    );
};

export default TopRatedHeader;
