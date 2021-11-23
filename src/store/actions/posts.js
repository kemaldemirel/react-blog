import axios from 'axios';

export const fetchPosts = (sortBy, page, PAGE_LIMIT) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(`https://61753daa08834f0017c70b7f.mockapi.io/posts`)
    .then(({ data }) => {
      dispatch(setTotalPosts(data.length));
    })
    .catch((error) => console.log(error.message));
  axios
    .get(
      `https://61753daa08834f0017c70b7f.mockapi.io/posts?p=${page}&limit=${PAGE_LIMIT}&sortBy=${sortBy}&order=desc`,
    )
    .then(({ data }) => {
      dispatch(setPosts(data));
    })
    .catch((error) => console.log(error.message));
};

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setPosts = (dataPosts) => ({
  type: 'SET_POSTS',
  payload: dataPosts,
});

export const setTotalPosts = (count) => ({
  type: 'SET_TOTAL_POSTS',
  payload: count,
});
