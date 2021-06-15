import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import ReleaseCard from './ReleaseCard';
import ReleaseHeader from './ReleaseHeader';
const NewRelease = () => {

    return (
        <VStack>
            <ReleaseHeader />
            <Box overflow='hidden' w='full'>
                <ReleaseCard />
            </Box>
        </VStack>
    );

};
export default NewRelease;
