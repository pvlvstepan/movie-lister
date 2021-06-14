import { Box, Container, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoriesNav from "./components/CategoriesNav";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

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
              <Route path='/movies' component={Movies} />
            </Switch>
          </GridItem>
          <GridItem>
            <CategoriesNav />
          </GridItem>
        </SimpleGrid>
      </BrowserRouter>
    </Container>
  );

};

export default App;
