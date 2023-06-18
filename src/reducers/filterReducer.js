const initialState = '';

export const filterText = (string) => {
  return {
    type: 'FILTER',
    payload: string,
  };
};

const filterReducer = (state = initialState, action) => {
  console.log('state now: ', state);
  console.log('action', action);

  switch (action.type) {
    case 'FILTER': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default filterReducer;
