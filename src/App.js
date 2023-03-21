import "./App.css";
import Cards from "./Components/Cards.jsx";
import Nav from "./Components/Nav";
import { useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onRandom() {
    let randomCh = Math.floor(Math.random() * 825);

    axios(`https://rickandmortyapi.com/api/character/${randomCh}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters((oldChars) => oldChars.filter((el) => el.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} onRandom={onRandom} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
