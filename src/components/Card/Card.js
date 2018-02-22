import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Card extends Component {



  render() {
    const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = this.props;

    return (
      <div className='Card'>
        Card
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
