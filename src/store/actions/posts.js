import axios from 'axios';

export const fetchPosts = (sortBy) => (dispatch) => {
  axios
    .get(`https://61753daa08834f0017c70b7f.mockapi.io/posts?sortBy=${sortBy}&order=desc`)
    .then(({ data }) => {
      dispatch(setPosts(data));
    })
    .catch((error) => console.log(error.message));
};

export const setPosts = (dataPosts) => ({
  type: 'SET_POSTS',
  payload: dataPosts,
});
