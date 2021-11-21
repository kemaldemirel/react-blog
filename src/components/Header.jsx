import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

export default function Header({ onClickOpenForm }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BookIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RB
          </Typography>
          <Button onClick={onClickOpenForm} variant="contained" color="secondary">
            Добавить пост
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
