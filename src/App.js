import useAPIrequest from "./adapters/useAPIrequest";

const App = () => {

  const { response, error } = useAPIrequest('https://yts.mx/api/v2/list_movies.json');

  console.log(response);

  return (
    <h1>Hello World</h1>
  );
};

export default App;
