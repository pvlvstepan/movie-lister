import { Box, Container, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Flex>
        <Box flex='20%'></Box>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movie' component={Movie} />
        </Switch>
        <Box flex='20%'></Box>
      </Flex>
    </BrowserRouter>
  );

};

export default App;
