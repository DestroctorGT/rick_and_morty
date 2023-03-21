import "./App.css";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards/Cards";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Detail from "./Components/Detail/Detail";

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
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
