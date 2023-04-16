import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import Cards from "./Components/Cards/Cards";
import About from "./Components/About/About";
import Detail from "./Components/Detail/Detail";
import Favorites from "./Components/myFavorites/Favorites";

function App() {
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  async function SignIn(userData) {
    let { data } = await axios(
      `http://localhost:3001/rickandmorty/login?email=${userData.email}&password=${userData.password}`
    );

    if (data.access === true) {
      setAccess(true);
      navigate("/home");
    } else {
      setAccess(false);
      navigate("/");
    }
  }

  function logOut() {
    setAccess(false);
    navigate("/");
  }

  return (
    <div className="App">
      <Nav logOut={logOut} />
      <Routes>
        <Route path="/" element={<Login SignIn={SignIn} />}></Route>
        <Route path="/home" element={<Cards />}></Route>

        <Route path="/favorites" element={<Favorites></Favorites>}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
