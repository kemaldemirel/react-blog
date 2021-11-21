const initialState = {
  posts: [],
  loaded: false,
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: payload,
        loaded: true,
      };
    case 'ADD_POSTS':
      return {
        ...state,
        posts: [...state.posts, ...payload],
      };
    default:
      return state;
  }
};
