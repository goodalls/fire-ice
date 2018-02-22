import React from 'react';
import PropTypes from 'prop-types';

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

Card.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  seats: PropTypes.array,
  titles: PropTypes.array,
  coatOfArms: PropTypes.string,
  ancestralWeapons: PropTypes.array,
  words: PropTypes.string
};
export default Card;
