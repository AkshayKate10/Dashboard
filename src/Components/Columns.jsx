import React from "react";
import Card from "./Card";

function Columns(props) {
  const { filteredCards, columnName, columnColor } = props;
  const getCards = () => {
    let cards =
      filteredCards &&
      filteredCards
        .filter((card) => {
          if (card.status === columnName) return true;
          return false;
        })
        .map((card, index) => {
          return (
            <div key={index}>
              <Card
                cardName={card.user}
                cardKey={card.cardKey}
                {...card}
                {...props}
              />
            </div>
          );
        });
    return cards;
  };

  return (
    <div
      className="columns"
      onDrop={(event) => {
        props.handleDrop(event, columnName);
      }}
      onDragOver={(event) => {
        props.handleDragOver(event, columnName);
      }}
      style={{ borderTop: `5px ${columnColor} solid` }}
    >
      <h2>{columnName}</h2>
      {getCards()}
    </div>
  );
}

export default Columns;
