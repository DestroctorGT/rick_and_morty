import { useState } from "react";
import { useLocation } from "react-router-dom";
import styleSearch from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSearch, onRandom }) {
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
