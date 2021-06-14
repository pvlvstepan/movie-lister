import { Spacer, Flex, Heading, HStack, IconButton, Button } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React from 'react';

const TopRatedHeader = ({ setPage, page, setIsLoading }) => {

    const handlePageNav = (dir) => {
        setIsLoading(true);
        setPage(page + dir);
    };

    return (
        <Flex direction='row' w='full' align='center' py={6}>
            <Heading as='h2' fontSize='2xl'>Top Rated</Heading>
            <Spacer />
            <HStack>
                <IconButton onClick={() => handlePageNav(-1)} isDisabled={page === 1 ? true : false} size='sm' icon={<FaArrowLeft />} />
                {page < 6 && <IconButton onClick={() => handlePageNav(+1)} size='sm' icon={<FaArrowRight />} />}
                {page === 6 && <Button size='sm' rightIcon={<FaArrowRight />}>See all</Button>}
            </HStack>
        </Flex>
    );
};

export default TopRatedHeader;
