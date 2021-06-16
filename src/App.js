import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CommentsController from "./adapters/CommentsControler";
import CategoriesNav from "./components/CategoriesNav";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container as='main' maxW={{
      xs: 'full',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      xxl: '1320px'
    }}>
      <BrowserRouter>
        <CommentsController />
        <Navbar toggleSideNav={toggleSideNav} />
        <SimpleGrid columns={5} row={1} spacing={6}>
          <GridItem colSpan={{ base: 5, md: 4 }}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/movies/' component={Movies} />
            </Switch>
          </GridItem>
          <GridItem>
            <CategoriesNav isOpen={isOpen} toggleSideNav={toggleSideNav} setIsOpen={setIsOpen} />
          </GridItem>
        </SimpleGrid>
        <MovieDetails />
        <Footer />
      </BrowserRouter>
    </Container>
  );

};

export default App;
