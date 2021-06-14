import { Box, Container, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const App = () => {

  return (
    <Container maxW={{
      xs: 'full',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      xxl: '1320px'
    }}>
      <BrowserRouter>
        <Navbar />
        <Flex>
          <Box flex='10%'></Box>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movie' component={Movie} />
          </Switch>
          <Box flex='10%'></Box>
        </Flex>
      </BrowserRouter>
    </Container>
  );

};

export default App;
