import { Box, Container, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const App = () => {

  return (
    <Box as='main' px={12}>
      <BrowserRouter>
        <Navbar />
        <Flex>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movie' component={Movie} />
          </Switch>
        </Flex>
      </BrowserRouter>
    </Box>
  );

};

export default App;
