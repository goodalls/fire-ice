export const houses = (state=[], action) => {
  switch (action.type) {
    case 'POPULATE_HOUSES':
      return [...state, ...action.houses];
  default:
    return state;
  }
};