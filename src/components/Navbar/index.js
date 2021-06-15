import { AspectRatio, Box, Button, Divider, Heading, HStack, Image, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure, VStack } from '@chakra-ui/react';
import { ImVideoCamera } from 'react-icons/im';
import React, { useState } from 'react';
import ColorModeToggle from './ColorModeToggle';
import { Link, useHistory } from 'react-router-dom';
import InputAsButton from './InputAsButton';
import { IoSearchSharp } from 'react-icons/io5';
import useAPIrequest from '../../adapters/useAPIrequest';

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [SearchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const { response, error } = useAPIrequest('https://yts.mx/api/v2/list_movies.json?query_term=' + SearchTerm.toLowerCase());

    console.log('https://yts.mx/api/v2/list_movies.json?query_term=' + SearchTerm.toLowerCase());

    console.log(response);
    return (
        <HStack as='header' py={6} justify='space-between'>
            <HStack as={Link} to='/' fontSize='4xl' maxW='220px' w='full'>
                <ImVideoCamera />
                <Heading as='h2' fontSize='2xl'>MovieLister</Heading>
            </HStack>
            <InputAsButton onOpen={onOpen} />
            <HStack>
                <Button px={9}>Your Profile</Button>
                <ColorModeToggle />
            </HStack>
            <Modal isOpen={isOpen} onClose={() => {
                onClose();
                setSearchTerm('');
            }}>
                <ModalOverlay />
                <ModalContent rounded="xl" p={3} mx={3}>
                    <ModalHeader p={0}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" children={<IoSearchSharp />} />
                            <Input
                                onChange={e => { setSearchTerm(e.target.value); }}
                                type="text"
                                placeholder="Search Movies"
                                variant="filled"
                            />
                        </InputGroup>
                    </ModalHeader>
                    <ModalBody
                        p={0} mt={6}
                        display={SearchTerm === '' ? "none" : "block"}>
                        {(response && response.data.movies) && <VStack w='full'>
                            {response.data.movies.map((val, key) => {
                                return (
                                    <>
                                        <Divider />
                                        <HStack cursor='pointer' onClick={() => history.push("?movie_id=" + val.id)} key={key} w='full' spacing={6}>
                                            <AspectRatio ratio={2 / 3} w='10%' objectFit="cover">
                                                <Image alt={val.title} fit='cover' rounded='lg' src={val['small_cover_image']} />
                                            </AspectRatio>
                                            <Heading maxW='80%' as='h3' fontSize='xl'>{val['title_long']}</Heading>
                                        </HStack>
                                    </>
                                );
                            })}
                        </VStack>}
                        {(response && !response.data.movies) && <Heading as='h4' fontSize='lg'>No search results...</Heading>}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </HStack>
    );
};

export default Navbar;
