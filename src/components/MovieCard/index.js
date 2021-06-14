import { AspectRatio, Heading, HStack, Image, Skeleton, SkeletonText, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const MovieCard = ({ img, title, year, rating, isLoading, aspect }) => {

    const [imageIsLoading, setImageIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading === true) {
            setImageIsLoading(true);
        }
    }, [isLoading]);

    return (
        <VStack align='start' _hover={{ transform: 'scale(1.05)' }} transition='.25s ease-in-out' maxW='300px'>

            <Skeleton rounded='lg' w='full' isLoaded={!isLoading && !imageIsLoading}>
                <AspectRatio ratio={aspect ? aspect : 2 / 3} w='full' objectFit="cover">
                    <Image fit='cover' rounded='lg' src={img} onLoad={() => setImageIsLoading(false)} />
                </AspectRatio>
            </Skeleton>
            <Skeleton maxW='full' isLoaded={!isLoading}>
                <Heading maxW='full' as='h3' fontSize='md' isTruncated title={title}>{title}</Heading>
            </Skeleton>
            <Skeleton width='min' isLoaded={!isLoading}>
                <HStack width='full' align='center'>
                    {year > 0 && <Text >{year}</Text>}
                    <AiFillStar fontSize='20px' color='green' />
                    <Text whiteSpace='nowrap' display='flex' dir='row' fontWeight='semibold'>{rating > 0 ? rating + ' / 10' : 'No rating'}</Text>
                </HStack>
            </Skeleton>
        </VStack>
    );
};

export default MovieCard;
