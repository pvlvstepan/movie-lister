import React, { useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, } from "@chakra-ui/react";
import { useHistory, useLocation } from 'react-router-dom';

const MovieDetails = ({ onClose, isOpen, onOpen }) => {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();
    const history = useHistory();

    useEffect(() => {
        if (query.get("movie_id")) {
            onOpen();
        }
    }, [query]);

    const handleClose = () => {
        history.replace({
            search: ''
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {query.get("movie_id")}
                </ModalBody>
                <ModalFooter>
                    footer
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default MovieDetails;
