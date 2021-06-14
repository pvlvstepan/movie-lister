import { extendTheme } from '@chakra-ui/react';

import breakpoints from './breakpoints';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
};

const overrides = extendTheme({
    config,
    breakpoints
});

export default overrides;