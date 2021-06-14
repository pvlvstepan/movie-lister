import { Heading, Box, Divider, SimpleGrid, GridItem, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import useAPIrequest from '../../adapters/useAPIrequest';
import MovieCard from '../../components/MovieCard';
import useWidnowLocation from '../../hooks/useWidnowLocation';
import Pagination from './Pagination';

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
        <VStack spacing={6} p={6} bg='gray.700'>
            <Heading alignSelf='start' as='h1' fontSize='3xl'>{title}</Heading>
            <Divider />
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
            {response && <Pagination
                setPage={setPage}
                setIsLoading={setIsLoading}
                page={page}
                limit={response.data.limit}
                movie_count={response.data['movie_count']} />}
        </VStack>
    );
};

export default Movies;
