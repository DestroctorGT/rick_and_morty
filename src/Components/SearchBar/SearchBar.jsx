import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addCharacter } from "../../redux/actions";
import styleSearch from "../SearchBar/SearchBar.module.css";

export function SearchBar({ addCharacter }) {
  const [inputValue, setInputValue] = useState("");

  const location = useLocation();

  let displaySearchBar = false;

  if (location.pathname === "/" || location.pathname === "/about") {
    displaySearchBar = false;
  } else {
    displaySearchBar = true;
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          addCharacter(data);
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
          addCharacter(data);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  return (
    <ul
      className={
        !displaySearchBar
          ? `${styleSearch.disableSearchBar}`
          : `${styleSearch.searchBar}`
      }>
      <li>
        <button
          onClick={onRandom}
          className={`${styleSearch.searchBar__button} ${styleSearch.searchBar__button__random}`}>
          <span className="material-symbols-outlined">bolt</span>
          Random
        </button>
      </li>

      <li>
        <input
          className={styleSearch.searchBar__input}
          onChange={handleChange}
          type="search"
        />
      </li>

      <li>
        <button
          onClick={() => onSearch(inputValue)}
          className={`${styleSearch.searchBar__button} ${styleSearch.searchBar__button__add}`}>
          <span className="material-symbols-outlined">add</span>
          Agregar
        </button>
      </li>
    </ul>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addCharacter: (char) => dispatch(addCharacter(char)),
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
