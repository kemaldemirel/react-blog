import React from 'react';
import { PostItem } from '../components';
import { Box, Paper, Grid, Pagination } from '@mui/material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../store/actions/posts';

const Home = () => {
  const posts = useSelector(({ post }) => post.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios('https://61753daa08834f0017c70b7f.mockapi.io/posts')
      .then(({ data }) => dispatch(setPosts(data)))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Box className="container" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {posts.length > 0 && posts.map((post) => <PostItem key={post.id} {...post} />)}
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper>xs=6 md=4</Paper>
        </Grid>
      </Grid>
      <Pagination count={10} />
    </Box>
  );
};

export default Home;
