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
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return dispatch({ type: ADD_CHAR, payload: response.data });
  };
}

export function addRandomCharacter() {
  return async function (dispatch) {
    let randomCh = Math.floor(Math.random() * 825);

    let response = await axios(
      `https://rickandmortyapi.com/api/character/${randomCh}`
    );

    console.log(response.data);

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
  return {
    type: ADD_FAV,
    payload: character,
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}
