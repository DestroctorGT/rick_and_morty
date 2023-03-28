import Card from "../Card/Card";
import "../Cards/Cards.css";

export default function Cards({ characters, onClose }) {
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
                onClose={onClose}
              />
            </div>
          );
        })}
    </article>
  );
}
