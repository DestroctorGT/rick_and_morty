import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

export function Favorites({ myFavorites }) {
  return (
    <div>
      {myFavorites &&
        myFavorites.map((e, i) => {
          return (
            <div className="card-container" key={i}>
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
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
