import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import "../Card/Card.css";

export function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
}) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav === true) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  }

  let renderGender = "";

  switch (gender) {
    case "Female":
      renderGender = "👩";
      break;

    case "Male":
      renderGender = "🧑";
      break;

    case "unknown":
      renderGender = "🤷‍♂️";
      break;

    default:
      renderGender = "🤷‍♂️";
      break;
  }
  return (
    <div className="card">
      <ul className="button__container">
        <li>
          {isFav ? (
            <button className="card__button" onClick={handleFavorite}>
              <span>❤️</span>
            </button>
          ) : (
            <button className="card__button" onClick={handleFavorite}>
              <span>🤍</span>
            </button>
          )}
        </li>

        <li>
          <button className="card__button" onClick={() => onClose(id)}>
            <span>❌</span>
          </button>
        </li>
      </ul>

      <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
        <h2>{name}</h2>
      </Link>

      <img src={image} alt="" />

      <h2>
        {species} {species === "Alien" ? "👽" : ""}
      </h2>

      <h2>
        {gender} {renderGender}
      </h2>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(null, mapDispatchToProps)(Card);
