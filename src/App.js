import { BrowserRouter, Route, Switch } from "react-router-dom";
import useAPIrequest from "./adapters/useAPIrequest";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie' component={Movie} />
      </Switch>
    </BrowserRouter>
  );

};

export default App;
