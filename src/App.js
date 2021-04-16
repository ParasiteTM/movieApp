import Nav from './Components/Nav';
import Main from './Components/Main';
import { useState, useEffect } from 'react';
import Axios from 'axios';
const App = () => {
  const [mode, setMode] = useState('movie');
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/${mode}/popular?api_key=${process.env.REACT_APP_api_key}`
    ).then((response) => setData(response.data));

    Axios.get(
      `https://api.themoviedb.org/3/genre/${mode}/list?api_key=${process.env.REACT_APP_api_key}`
    ).then((response) => setGenres(response.data));
  }, [mode]);

  const handleSearch = (search) => {
    Axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_api_key}&query=${search}`
    ).then((response) => setData(response.data));
  };
  return (
    <>
      <Nav setMode={setMode} handleSearch={handleSearch} mode={mode} />
      <Main data={data} genres={genres} />
    </>
  );
};

export default App;
