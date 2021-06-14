import { AspectRatio, Heading, Image, Skeleton, SkeletonText, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const MovieCard = ({ img, title, year, isLoading }) => {

    const [imageIsLoading, setImageIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading === true) {
            setImageIsLoading(true);
        }
    }, [isLoading]);

    return (
        <VStack align='start'>
            <AspectRatio ratio={2 / 3} w='full'>
                <Skeleton rounded='xl' isLoaded={!isLoading && !imageIsLoading}>
                    <Image rounded='xl' src={img} onLoad={() => setImageIsLoading(false)} />
                </Skeleton>
            </AspectRatio>
            <Skeleton maxW='full' isLoaded={!isLoading}>
                <Heading maxW='full' as='h3' fontSize='md' isTruncated title={title}>{title}</Heading>
            </Skeleton>
            <Skeleton maxW='min' isLoaded={!isLoading}>
                <Text >{year}</Text>
            </Skeleton>
        </VStack>
    );
};

export default MovieCard;
