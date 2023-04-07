import {
  ADD_CHAR,
  ADD_RANDOM,
  ADD_FAV,
  REMOVE_FAV,
  REMOVE_CHAR,
} from "./types";

const initialState = {
  characters: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAR:
      return {
        ...state,
        characters: [...state.characters, payload],
      };

    case ADD_RANDOM:
      return {
        ...state,
        characters: [...state.characters, payload],
      };

    case REMOVE_CHAR:
      const newArray = state.characters.filter((char) => char.id !== payload);
      const newArrayFav = state.myFavorites.filter(
        (charFav) => charFav.id !== payload
      );

      return {
        ...state,
        characters: newArray,
        myFavorites: newArrayFav,
      };

    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      const newFavorites = state.myFavorites.filter(
        (char) => char.id !== payload
      );
      return {
        ...state,
        myFavorites: newFavorites,
      };

    default:
      return state;
  }
};

export default rootReducer;
