import Card from "./Card";

export default function Cards(props) {
  return (
    <>
      {props.characters.map((e) => {
        return (
          <div key={e.id}>
            <Card
              id={e.id}
              name={e.name}
              species={e.species}
              gender={e.gender}
              image={e.image}
              onClose={() => window.alert("Emulamos que se cierra la card")}
            />
          </div>
        );
      })}
    </>
  );
}
