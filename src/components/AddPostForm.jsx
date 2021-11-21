import Form from './Form';
import { Drawer, Toolbar, Typography, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddPostForm = ({ isOpen, isClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={isClose}>
      <Box sx={{ width: '700px', padding: '20px' }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} onClick={isClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Typography align="center" variant="h4" component="h4" gutterBottom>
          Добавить пост
        </Typography>
        <Form />
      </Box>
    </Drawer>
  );
};

export default AddPostForm;
