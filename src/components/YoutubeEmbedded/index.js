import { AspectRatio, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';

const YoutubeEmbedded = ({ isOpen, onClose, videoID, title }) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='2xl' >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader mb={1}>
                    {title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <AspectRatio ratio={16 / 9} maxW='full'>
                        <iframe id="ytplayer" type="text/html"
                            src={"https://www.youtube.com/embed/" + videoID}
                        ></iframe>
                    </AspectRatio>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default YoutubeEmbedded;
