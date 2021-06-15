import { AspectRatio, Box } from '@chakra-ui/react';
import React from 'react';

const Trailer = ({ ytID }) => {
    return (
        <Box w='full'>
            <AspectRatio ratio={16 / 9} maxW='full'>
                <iframe id="ytplayer" type="text/html"
                    src={"https://www.youtube.com/embed/" + ytID}
                ></iframe>
            </AspectRatio>
        </Box>
    );
};

export default Trailer;
