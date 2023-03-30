import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import Cards from "./Components/Cards/Cards";
import About from "./Components/About/About";
import Detail from "./Components/Detail/Detail";
import Favorites from "./Components/myFavorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  const Email = "destroctorgt@gmail.com";

  const PASSWORD = "Semeolvido1";

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function SignIn(userData) {
    if (
      userData.email.toString() === Email &&
      userData.password.toString() === PASSWORD
    ) {
      setAccess(true);
      navigate("/home");
    }
  }

  function logOut() {
    setAccess(false);
    navigate("/");
  }

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
      <Nav onSearch={onSearch} onRandom={onRandom} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Login SignIn={SignIn} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}></Route>

        <Route
          path="/favorites"
          element={<Favorites onClose={onClose}></Favorites>}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
