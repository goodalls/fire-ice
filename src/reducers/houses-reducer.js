export const houses = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_HOUSES':
      return [...state, ...action.houses];
    default:
      return state;
  }
};

export const swornMembers = (state = [], action) => {
  switch (action.type) {
    case 'SWORN_MEMBERS':
      return [...state, ...action.members];
    default:
      return state;
  }
};
