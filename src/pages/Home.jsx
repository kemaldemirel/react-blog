import React from 'react';
import { PostItem, SelectSort, LoaderPosts } from '../components';
import { Box, Grid, Pagination } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/actions/posts';

const Home = () => {
  const [page, setPage] = React.useState(1);

  const { posts, loaded, total_posts } = useSelector(({ post }) => post);
  const sortBy = useSelector(({ filter }) => filter.sortBY);
  const dispatch = useDispatch();

  const PAGE_LIMIT = 6;
  const PAGE_COUNT = Math.ceil(total_posts / PAGE_LIMIT);

  React.useEffect(() => {
    dispatch(fetchPosts(sortBy, page, PAGE_LIMIT));
  }, [sortBy, page]);

  const handleChangePage = (event, value) => {
    console.log(setPage(value));
  };

  return (
    <Box className="container" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={9}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {loaded
              ? posts.map((post) => <PostItem key={post.id} {...post} />)
              : Array(6)
                  .fill(null)
                  .map((_, index) => <LoaderPosts key={index} />)}
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <SelectSort />
        </Grid>
      </Grid>
      <Pagination count={PAGE_COUNT} onChange={handleChangePage} />
    </Box>
  );
};

export default Home;
