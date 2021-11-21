const initialState = {
  sortBY: 'popular',
};

export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBY: payload,
      };

    default:
      return state;
  }
};
