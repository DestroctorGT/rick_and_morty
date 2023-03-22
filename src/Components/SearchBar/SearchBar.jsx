import { useState } from "react";

export default function SearchBar({ onSearch, onRandom }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
      <input onChange={handleChange} type="search" />
      <button onClick={() => onSearch(inputValue)}>Agregar</button>
      <button onClick={onRandom}>Random</button>
    </>
  );
}
