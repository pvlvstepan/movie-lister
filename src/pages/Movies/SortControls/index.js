import { HStack, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Stack, Text } from '@chakra-ui/react';
import categories from './../../../data/categories';
import React from 'react';

const SortControls = ({ rating, setQuality, setGenre, setOrderBy, setRating }) => {

    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };

    return (
        <Stack spacing={3} w='full'>
            <HStack spacing={3} >
                <Select placeholder="Order By" size='sm' rounded='lg' onChange={(e) => setOrderBy(e.target.value)}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </Select>
                <Select placeholder="Quality" size='sm' rounded='lg' onChange={(e) => setQuality(e.target.value)}>
                    <option value="720p">720p</option>
                    <option value="1080p">1080p</option>
                    <option value="2160p">2160p</option>
                    <option value="3D">3D</option>
                </Select>
                <Select placeholder="Genre" size='sm' rounded='lg' onChange={(e) => setGenre(e.target.value)}>
                    {categories.map((val, key) => {
                        return (
                            <option value={val} key={key}>{val.toProperCase()}</option>
                        );
                    })}
                </Select>
            </HStack>
            <HStack spacing={6}>
                <Text>Rating</Text>
                <Slider colorScheme='green' defaultValue={0} min={0} max={9} step={1} onChangeEnd={(val) => setRating(val)}>
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
