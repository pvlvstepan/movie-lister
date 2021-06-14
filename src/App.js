import { BrowserRouter, Route, Switch } from "react-router-dom";
import useAPIrequest from "./adapters/useAPIrequest";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie' component={Movie} />
      </Switch>
    </BrowserRouter>
  );

};

export default App;
