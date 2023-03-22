import React from "react";
import "../Nav/Nav.css";
import Logo from "../../Assets/Rick-and-Morty.png";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, onRandom }) {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <img
            src={Logo}
            alt="Rick & Morty Logo"
            className="navbar__logo"></img>
        </li>

        <li>
          <ul className="navbar navbar__input">
            <SearchBar onSearch={onSearch} />
          </ul>
        </li>

        <li>
          <ul className="navbar navbar__buttons">
            <li>
              <Link to="/home">
                <button>Home</button>
              </Link>
            </li>

            <li>
              <Link to="/about">
                <button>About</button>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
