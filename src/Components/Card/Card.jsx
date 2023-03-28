import { Link } from "react-router-dom";
import "../Card/Card.css";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
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
      <button className="card__button" onClick={() => onClose(id)}>
        <span>X</span>
      </button>

      <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
        <h2>{name}</h2>
      </Link>

      <h2>
        {species} {species === "Alien" ? "👽" : ""}
      </h2>

      <h2>
        {gender} {renderGender}
      </h2>

      <img src={image} alt="" />
    </div>
  );
}
