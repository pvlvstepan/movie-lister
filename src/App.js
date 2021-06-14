import { Box, Container, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const App = () => {

  return (
    <Container as='main' maxW={{
      xs: 'full',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      xxl: '1320px'
    }}>
      <BrowserRouter>
        <Navbar />
        <SimpleGrid columns={5} row={1}>
          <GridItem colSpan={4}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/movie' component={Movie} />
            </Switch>
          </GridItem>
          <GridItem>

          </GridItem>
        </SimpleGrid>
      </BrowserRouter>
    </Container>
  );

};

export default App;
