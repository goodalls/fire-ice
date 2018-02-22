import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import * as api from '../../api';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.requestData();
  }

  requestData = async () => {
    const initialFetch = await api.fetchParse(
      'http://localhost:3001/api/v1/houses'
    );
    this.props.populate(initialFetch);
  };

  housesRenderCheck = () => {
    if (!this.props.houses.length) {
      return <div id="wolf" />;
    } else {
      return this.props.houses.map((house, index) => {
        return <Card {...house} key={house.name + index} />;
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>

          {/* <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button> */}
        </div>
        <div className="Display-info">
          <div className="Container">{this.housesRenderCheck()}</div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: PropTypes.string,
  fakeAction: PropTypes.func,
  houses: PropTypes.array,
  populate: PropTypes.func
};

export const mapStateToProps = state => ({
  fake: state.fake,
  houses: state.houses
});

export const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(actions.fakeAction()),
  populate: houses => dispatch(actions.populateHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
