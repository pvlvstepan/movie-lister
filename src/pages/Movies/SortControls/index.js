import { HStack, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Stack, VStack, Text, Input, } from '@chakra-ui/react';
import React from 'react';

const SortControls = ({ rating }) => {
    return (
        <Stack spacing={3} w='full'>
            <Input size='sm' variant='filled' rounded='lg' placeholder='Search term...'></Input>
            <HStack spacing={3} >
                <Select placeholder="Order By" size='sm' rounded='lg'>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </Select>
                <Select placeholder="Quality" size='sm' rounded='lg'>
                    <option value="720p">720p</option>
                    <option value="1080p">1080p</option>
                    <option value="2160p">2160p</option>
                    <option value="3D">3D</option>
                </Select>
                <Select placeholder="Genre" size='sm' rounded='lg'>
                    <option value="all">All</option>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="animation">Animation</option>
                    <option value="biography">Biography</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="documentary">Documentary</option>
                    <option value="drama">Drama</option>
                    <option value="family">Family</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="film-noir">Film-Noir</option>
                    <option value="game-show">Game-Show</option>
                    <option value="history">History</option>
                    <option value="horror">Horror</option>
                    <option value="music">Music</option>
                    <option value="musical">Musical</option>
                    <option value="mystery">Mystery</option>
                    <option value="news">News</option>
                    <option value="reality-tv">Reality-TV</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="sport">Sport</option>
                    <option value="talk-show">Talk-Show</option>
                    <option value="thriller">Thriller</option>
                    <option value="war">War</option>
                    <option value="western">Western</option>
                </Select>
            </HStack>
            <HStack spacing={6}>
                <Text>Rating</Text>
                <Slider colorScheme='green' defaultValue={0} min={0} max={9} step={1}>
                    <SliderTrack>
                        <Box position="relative" right={10} />
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={4} />
                </Slider>
                <Text>{rating}+</Text>
            </HStack>
        </Stack>
    );
};

export default SortControls;
