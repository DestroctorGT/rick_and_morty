import {
  ADD_CHAR,
  ADD_RANDOM,
  ADD_FAV,
  REMOVE_FAV,
  REMOVE_CHAR,
} from "./types";
import axios from "axios";

export function addCharacter(id) {
  return async function (dispatch) {
    let response = await axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    );
    return dispatch({ type: ADD_CHAR, payload: response.data });
  };
}

export function addRandomCharacter() {
  return async function (dispatch) {
    let randomCh = Math.floor(Math.random() * 825);

    let response = await axios(
      `http://localhost:3001/rickandmorty/character/${randomCh}`
    );

    return dispatch({ type: ADD_RANDOM, payload: response.data });
  };
}

export function removeCharacter(id) {
  return {
    type: REMOVE_CHAR,
    payload: id,
  };
}

export function addFav(character) {
  return async function (dispatch) {
    let response = await axios.post(
      "http://localhost:3001/rickandmorty/fav",
      character
    );

    return dispatch({ type: ADD_FAV, payload: response.data });
  };
}

export function removeFav(id) {
  return async function (dispatch) {
    let response = await axios.delete(
      `http://localhost:3001/rickandmorty/fav/${id}`
    );

    return dispatch({ type: REMOVE_FAV, payload: response.data });
  };
}
