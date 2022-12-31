import { React, useEffect } from "react";
import './App.css'
import {SearchIcon} from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=718c258b'

function App() {

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()

    console.log(data.Search)

  }

  useEffect(() => {
    // searchMovies('Spiderman')
  }, []);


  return (
    <div className="app">
      <h1>IMDB Clone</h1>
    </div>
  );
}

export default App;
