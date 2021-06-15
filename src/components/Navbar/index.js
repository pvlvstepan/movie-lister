import { AspectRatio, Box, Button, Divider, GridItem, Heading, HStack, Image, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, useDisclosure, VStack } from '@chakra-ui/react';
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

    return (
        <SimpleGrid as='header' columns={5} row={1} spacing={6} mt={6} mb={9}>
            <GridItem colSpan={{ base: 3, lg: 1 }}>
                <HStack as={Link} to='/' fontSize='4xl' maxW='220px' w='full'>
                    <ImVideoCamera />
                    <Heading as='h2' fontSize='2xl'>MovieLister</Heading>
                </HStack>
            </GridItem>
            <GridItem colSpan={{ base: 5, lg: 3 }}>
                <InputAsButton onOpen={onOpen} />
            </GridItem>
            <GridItem colSpan={{ base: 2, lg: 1 }} colStart={{ base: 4, lg: 5 }} rowStart={1}>
                <HStack>
                    <Button width='full'>Your Profile</Button>
                    <ColorModeToggle />
                </HStack>
            </GridItem>
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
                                    <Box key={key} w='full' >
                                        <Divider />
                                        <HStack cursor='pointer' onClick={() => history.push("?movie_id=" + val.id)} spacing={6}>
                                            <AspectRatio ratio={2 / 3} w='10%' objectFit="cover">
                                                <Image alt={val.title} fit='cover' rounded='lg' src={val['small_cover_image']} />
                                            </AspectRatio>
                                            <Heading maxW='80%' as='h3' fontSize='xl'>{val['title_long']}</Heading>
                                        </HStack>
                                    </Box>
                                );
                            })}
                        </VStack>}
                        {(response && !response.data.movies) && <Heading as='h4' fontSize='lg'>No search results...</Heading>}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </SimpleGrid>
    );
};

export default Navbar;
