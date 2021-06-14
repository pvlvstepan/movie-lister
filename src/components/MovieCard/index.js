import { AspectRatio, Heading, HStack, Image, Skeleton, SkeletonText, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const MovieCard = ({ img, title, year, rating, isLoading }) => {

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
            <Skeleton width='min' isLoaded={!isLoading}>
                <HStack width='full' align='center'>
                    <Text >{year}</Text>
                    <AiFillStar fontSize='20px' color='green' />
                    <Text whiteSpace='nowrap' display='flex' dir='row' fontWeight='semibold'>{rating} / 10</Text>
                </HStack>
            </Skeleton>
        </VStack>
    );
};

export default MovieCard;
