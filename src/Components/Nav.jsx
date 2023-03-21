import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, onRandom }) {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button onClick={onRandom}>Random</button>

      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/about">
        <button>About</button>
      </Link>
    </nav>
  );
}
