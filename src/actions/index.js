export const fakeAction = () => ({type: 'FAKE'});

export const populateHouses = (houses) => ({
  type: 'POPULATE_HOUSES',
  houses
});

export const swornMembers = members => ({
  type: 'SWORN_MEMBERS',
  members
});
