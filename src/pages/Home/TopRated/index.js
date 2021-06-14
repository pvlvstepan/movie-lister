import { GridItem, SimpleGrid, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MovieCard from '../../../components/MovieCard';
import TopRatedHeader from './TopRatedHeader';
import useAPIrequest from './../../../adapters/useAPIrequest';

const TopRated = () => {

    const [page, setPage] = useState(1);

    const { response, error } = useAPIrequest('https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=6&page=' + page);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (response && response !== null) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [response]);

    return (
        <VStack>
            <TopRatedHeader setPage={setPage} page={page} setIsLoading={setIsLoading} />
            <SimpleGrid w='full' columns={3} row={2} spacing={6}>
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
        </VStack>
    );
};

export default TopRated;
