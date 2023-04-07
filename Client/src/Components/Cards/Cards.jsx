import Card from "../Card/Card";
import { connect } from "react-redux";
import "../Cards/Cards.css";

export function Cards({ characters }) {
  return (
    <article>
      {characters &&
        characters.map((e, index) => {
          return (
            <div className="card-container" key={index}>
              <Card
                id={e.id}
                name={e.name}
                species={e.species}
                gender={e.gender}
                image={e.image}
              />
            </div>
          );
        })}
    </article>
  );
}

export function mapState(state) {
  return {
    characters: state.characters,
  };
}

export default connect(mapState, null)(Cards);
