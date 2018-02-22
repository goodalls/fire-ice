import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Card extends Component {



  render() {
    const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = this.props;

    return (
      <div className='Card'>
        <h2>{name}</h2>
        <h4>{words}</h4>
        <p> Founded:{founded} </p>
        <p>Seats: {seats}</p>
        <p>Titles: {titles}</p>
        <p>Ancestral Weapons: {ancestralWeapons}</p>
        <p>Coat of Arms: {coatOfArms}</p>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  houses: state.houses
});

export const mapDispatchToProps = dispatch => ({
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Card);
