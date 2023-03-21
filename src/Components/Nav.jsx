import React from "react";
import SearchBar from "./SearchBar";

export default function Nav({ onSearch, onRandom }) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={onRandom}>Random</button>
    </div>
  );
}
