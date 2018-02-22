import {houses, swornMembers} from './houses-reducer';
import * as actions from '../actions/index';

describe('HOUSES', () => {
  it('should return state by default', () => {
    const mockState = [{}, {}];
    const expected = [{}, {}];
    expect(houses(mockState, {})).toEqual(expected);
  });

  it('should return new state of POPULATE_HOUSES', () => {
    const expected = [{}, {}];
    const mockPopulate = [{}, {}];
    expect(houses(undefined, actions.populateHouses(mockPopulate))).toEqual(expected);
  });

  it('should return new state of POPULATE_HOUSES while keeping state', () => {
    const mockState = [{}, {}];
    const expected = [{}, {}, {}, {}];
    const mockPopulate = [{}, {}];
    expect(houses(mockState, actions.populateHouses(mockPopulate))).toEqual(expected);
  });

  describe('SWORN_MEMBERS', () => {
    it('should return state by default', () => {
      const mockState = [{}, {}];
      const expected = [{}, {}];
      expect(swornMembers(mockState, {})).toEqual(expected);
    });

    it('should return new state of SWORN_MEMBERS', () => {
      const expected = [{}, {}];
      const mockMembers = [{}, {}];
      expect(swornMembers(undefined, actions.swornMembers(mockMembers))).toEqual(expected);
    });
  });
  

});
