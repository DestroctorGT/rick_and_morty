import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <>
      {characters &&
        characters.map((e, index) => {
          return (
            <div key={index}>
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
    </>
  );
}
