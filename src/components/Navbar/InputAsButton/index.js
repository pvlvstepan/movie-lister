import React, { useEffect } from "react";
import { IoSearchSharp } from 'react-icons/io5';
import { Kbd, InputGroup, InputLeftElement, InputRightElement, Input, Button } from "@chakra-ui/react";

const InputAsButton = ({ onOpen }) => {

    useEffect(() => {
        const handleBodyKeyDown = (e) => {
            if (e.keyCode === 83 && e.altKey) {
                onOpen();
            }
        };
        document.body.addEventListener('keyup', handleBodyKeyDown);
    }, [onOpen]);

    return (
        <InputGroup maxW='600px'>
            <InputLeftElement pointerEvents="none" children={<IoSearchSharp />} />
            <Input
                as={Button}
                justifyContent="start"
                fontWeight={400}
                onClick={onOpen}
                variant="filled">
                Search Movies
            </Input>
            <InputRightElement mr={6} display={{ base: "none", lg: "flex" }} pointerEvents="none" children={<><Kbd>alt</Kbd> + <Kbd>s</Kbd></>} />
        </InputGroup>
    );
};

export default InputAsButton;