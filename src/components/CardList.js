import React from "react";
import Card from "./Card";

function CardList({ monsters }) {
  const cardsArray = monsters.map((user, i) => {
    return (
      <Card
        key={monsters[i].id}
        id={monsters[i].id}
        name={monsters[i].name}
        email={monsters[i].email}
      />
    );
  });

  return <div>{cardsArray}</div>;
}

export default CardList;
