import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import SearchForm from './SearchForm';

export default function Header({ onClickOpenForm }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BookIcon />
          <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
            RB
          </Typography>
          <SearchForm />
          <Button onClick={onClickOpenForm} variant="contained" color="secondary">
            Добавить пост
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
