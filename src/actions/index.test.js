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
});
