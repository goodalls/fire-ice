import React from 'react';

const Card = (props) => {
  const {
    name,
    founded,
    seats,
    titles,
    coatOfArms,
    ancestralWeapons,
    words
  } = props;

  return (
    <div className="Card">
      <h2>{name}</h2>
      <h4>{words}</h4>
      <p> Founded:{founded} </p>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
    </div>
  );
};

export default Card;
