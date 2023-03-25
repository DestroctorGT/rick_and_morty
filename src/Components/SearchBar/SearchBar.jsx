import { useState } from "react";
import "../SearchBar/SearchBar.css";

export default function SearchBar({ onSearch, onRandom }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
      <button
        onClick={onRandom}
        className="searchBar__button searchBar__button--random">
        <span className="material-symbols-outlined">bolt</span>
        Random
      </button>
      <input
        className="searchBar__input"
        onChange={handleChange}
        type="search"
      />
      <button
        onClick={() => onSearch(inputValue)}
        className="searchBar__button searchBar__button--add">
        <span className="material-symbols-outlined">add</span>
        Agregar
      </button>
    </>
  );
}
