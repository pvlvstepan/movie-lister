import { Heading, Box, Divider, SimpleGrid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import useAPIrequest from '../../adapters/useAPIrequest';
import MovieCard from '../../components/MovieCard';
import useWidnowLocation from '../../hooks/useWidnowLocation';

const Movies = () => {

    const { title, type } = useWidnowLocation();

    const [page, setPage] = useState(1);

    const { response, error } = useAPIrequest('https://yts.mx/api/v2/list_movies.json?sort_by=' + type + '&page=' + page);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (response && response !== null) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [response]);

    return (
        <Box p={6} bg='gray.700'>
            <Heading as='h1' fontSize='3xl'>{title}</Heading>
            <Divider my={6} />
            <SimpleGrid w='full' columns={4} spacing={6}>
                {response && response.data.movies.map((val, key) => {
                    return (
                        <GridItem key={key}>
                            <MovieCard
                                img={val['medium_cover_image']}
                                title={val['title_english']}
                                year={val['year']}
                                isLoading={isLoading}
                                rating={val['rating']} />
                        </GridItem>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
};

export default Movies;
