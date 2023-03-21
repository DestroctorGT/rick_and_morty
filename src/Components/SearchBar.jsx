import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div>
      <input onChange={handleChange} type="search" />
      <button onClick={() => onSearch(inputValue)}>Agregar</button>
    </div>
  );
}
