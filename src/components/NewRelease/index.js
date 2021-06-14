import { VStack } from '@chakra-ui/react';
import React from 'react';
import ReleaseCard from './ReleaseCard';
import ReleaseHeader from './ReleaseHeader';

const NewRelease = () => {
    return (
        <VStack>
            <ReleaseHeader />
            <ReleaseCard />
        </VStack>
    );
};

export default NewRelease;
