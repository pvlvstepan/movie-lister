import { Spacer, Flex, Heading, HStack, IconButton, Button, Box, Text } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import React from 'react';

const TopMoviesHeader = ({ setPage, page, setIsLoading, type }) => {

    const handlePageNav = (dir) => {
        setIsLoading(true);
        setPage(page + dir);
    };

    return (
        <Flex direction='row' w='full' align='center' py={6}>
            <Heading whiteSpace='nowrap' as='h2' fontSize='2xl'>Top {type === 'rating' ? 'Rated' : type === 'like_count' ? 'Likes' : 'Downloads'}</Heading>
            <Box w='full' px={3}>
                <hr />
            </Box>
            <HStack>
                <HStack spacing={0}>
                    {[...Array(6)].map((e, i) => <GoPrimitiveDot opacity={i + 1 === page ? 1 : 0.3} />)}
                </HStack>
                <IconButton onClick={() => handlePageNav(-1)} isDisabled={page === 1 ? true : false} size='sm' icon={<FaArrowLeft />} />
                {page < 6 && <IconButton onClick={() => handlePageNav(+1)} size='sm' icon={<FaArrowRight />} />}
                {page === 6 && <Button size='sm' rightIcon={<FaArrowRight />}>See all</Button>}
            </HStack>
        </Flex>
    );
};

export default TopMoviesHeader;
