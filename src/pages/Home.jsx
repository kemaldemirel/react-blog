import React from 'react';
import { PostItem, SelectSort, LoaderPosts } from '../components';
import { Box, Grid, Pagination } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/actions/posts';

const Home = () => {
  const { posts, loaded } = useSelector(({ post }) => post);
  const sortBy = useSelector(({ filter }) => filter.sortBY);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts(sortBy));
  }, [sortBy]);

  return (
    <Box className="container" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {loaded
              ? posts.map((post) => <PostItem key={post.id} {...post} />)
              : Array(6)
                  .fill(null)
                  .map((_, index) => <LoaderPosts key={index} />)}
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <SelectSort />
        </Grid>
      </Grid>
      <Pagination count={20} />
    </Box>
  );
};

export default Home;
