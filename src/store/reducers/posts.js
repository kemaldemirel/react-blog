const initialState = {
  posts: [],
  loaded: false,
  total_posts: 0,
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
    case 'SET_TOTAL_POSTS':
      return {
        ...state,
        total_posts: payload,
      };
    case 'SET_LOADED':
      return {
        ...state,
        loaded: payload,
      };
    default:
      return state;
  }
};
