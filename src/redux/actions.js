import { ADD_CHAR, ADD_FAV, REMOVE_FAV, REMOVE_CHAR } from "./types";

export function addCharacter(char) {
  return {
    type: ADD_CHAR,
    payload: char,
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
