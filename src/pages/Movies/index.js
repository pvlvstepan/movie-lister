import { Heading, Divider, SimpleGrid, GridItem, VStack, Spacer, Button, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAPIrequest from '../../adapters/useAPIrequest';
import MovieCard from '../../components/MovieCard';
import useWidnowLocation from '../../hooks/useWidnowLocation';
import Pagination from './Pagination';
import SortControls from './SortControls';

const Movies = () => {

    const { title, type } = useWidnowLocation();
    const [page, setPage] = useState(1);

    const [quality, setQuality] = useState('all');
    const [genre, setGenre] = useState('all');
    const [orderBy, setOrderBy] = useState('desc');
    const [rating, setRating] = useState(0);

    const { response, error } = useAPIrequest('https://yts.mx/api/v2/list_movies.json?sort_by=' + type + '&quality=' + quality + '&genre=' + genre + '&minimum_rating=' + rating + '&order_by=' + orderBy + '&page=' + page);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (response && response !== null) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [response]);

    useEffect(() => {
        setIsLoading(true);
    }, [quality, genre, orderBy, rating]);

    return (
        <VStack spacing={6} p={6} bg='gray.700' rounded='xl'>
            <HStack alignSelf='start' w='full'>
                <Heading as='h1' fontSize='3xl'>{title}</Heading>
                <Spacer />
                <Button as={Link} to='/' size='sm'>Back to Home</Button>
            </HStack>
            <Divider />
            <SortControls
                rating={rating}
                setQuality={setQuality}
                setGenre={setGenre}
                setOrderBy={setOrderBy}
                setRating={setRating} />
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
