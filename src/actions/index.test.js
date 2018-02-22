import * as actions from './index';

describe('ACTIONS INDEX', () => {
  it('should create populate houses action', () => {
    const mockHouses = [{}, {}];
    const expected = {
      type: 'POPULATE_HOUSES',
      houses: mockHouses 
    };
    expect(actions.populateHouses(mockHouses)).toEqual(expected);
  });
  it('should create a SWORN_MEMBERS action', () => {
    const mockSworn = [{}, {}];
    const expected = {
      type: 'SWORN_MEMBERS',
      members: mockSworn
    };
    expect(actions.swornMembers(mockSworn)).toEqual(expected);
  });
});
