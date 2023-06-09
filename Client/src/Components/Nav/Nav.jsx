import React from "react";
import "../Nav/Nav.css";
import Logo from "../../Assets/Rick-and-Morty.png";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ logOut }) {
  const location = useLocation();

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
          <SearchBar />
        </li>

        <li>
          <ul
            className={
              location.pathname === "/"
                ? "navbar__disable-inputs"
                : "navbar navbar__buttons"
            }>
            <li>
              <Link to="/home">
                <button className="navbar__button">Home</button>
              </Link>
            </li>

            <li>
              <Link to="/favorites">
                <button className="navbar__button">My Favorites</button>
              </Link>
            </li>

            <li>
              <Link to="/about">
                <button className="navbar__button">About</button>
              </Link>
            </li>

            <li>
              <button className="navbar__button" onClick={logOut}>
                Log Out
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
