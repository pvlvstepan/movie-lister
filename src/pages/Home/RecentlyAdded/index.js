import { GridItem, Heading, Button, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MovieCard from '../../../components/MovieCard';
import useAPIrequest from '../../../adapters/useAPIrequest';

const RecentlyAdded = () => {

    const { response, error } = useAPIrequest('https://yts.mx/api/v2/list_movies.json?sort_by=date_added&limit=6&page=1');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (response && response !== null) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [response]);

    return (
        <VStack spacing={6} align='start' width='220px' py={6}>
            <Heading whiteSpace='nowrap' as='h2' fontSize='2xl'>Recently Added</Heading>
            {response && response.data.movies.map((val, key) => {
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
            <Button>View More</Button>
        </VStack>
    );
};

export default RecentlyAdded;

