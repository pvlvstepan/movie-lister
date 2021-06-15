import { Container, GridItem, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, } from "@chakra-ui/react";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import CategoriesNav from "./components/CategoriesNav";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const App = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <Route path='/movies/' component={Movies} />
            </Switch>
          </GridItem>
          <GridItem>
            <CategoriesNav />
          </GridItem>
        </SimpleGrid>
        <MovieDetails isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </BrowserRouter>
    </Container>
  );

};

export default App;
