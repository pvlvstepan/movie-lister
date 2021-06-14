import { GridItem, Heading, Button, VStack, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MovieCard from '../../../components/MovieCard';
import useAPIrequest from '../../../adapters/useAPIrequest';
import { Link } from "react-router-dom";

const RecentlyAdded = () => {

    const { response, error } = useAPIrequest('https://yts.mx/api/v2/list_movies.json?sort_by=date_added');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (response && response !== null) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [response]);

    return (
        <VStack spacing={6} align='start' py={6}>
            <Heading whiteSpace='nowrap' textTransform='uppercase' as='h4' fontSize='md'>Recently Added</Heading>
            <Box as='hr' w='full' />
            {response && response.data.movies.slice(0, 6).map((val, key) => {
                return (
                    <GridItem key={key} w='full'>
                        <MovieCard
                            img={val['background_image']}
                            aspect={16 / 9}
                            title={val['title_english']}
                            year={val['year']}
                            isLoading={isLoading}
                            rating={val['rating']} />
                    </GridItem>
                );
            })}
            <Button as={Link} to='/movies/recent' w='full' colorScheme='green'>View More</Button>
        </VStack>
    );
};

export default RecentlyAdded;

