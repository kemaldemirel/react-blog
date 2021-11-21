import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  Box,
} from '@mui/material/';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

export default function PostIten({ description, id, imageURL, title, favorites, views, comments }) {
  const [likes, setLikes] = React.useState({
    countLikes: favorites,
    colorLikeBtn: 'disabled',
  });
  const isLike = React.useRef(false);

  const toggleClickLike = () => {
    if (isLike.current) {
      setLikes({ ...likes, countLikes: likes.countLikes - 1, colorLikeBtn: 'disabled' });
      isLike.current = false;
    } else {
      setLikes({ ...likes, countLikes: likes.countLikes + 1, colorLikeBtn: 'secondary' });
      isLike.current = true;
    }
  };

  return (
    <Card className="post">
      <CardMedia component="img" height="140" image={imageURL} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: 'auto', justifyContent: 'space-between' }}>
        <Button size="small">Читать</Button>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label="add to favorites" onClick={toggleClickLike}>
            <FavoriteIcon color={likes.colorLikeBtn} sx={{ fontSize: '15px' }} />
          </IconButton>
          <Typography variant="span" component="span">
            {likes.countLikes}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RemoveRedEyeIcon color="disabled" sx={{ fontSize: '15px' }} />
          <Typography variant="span" component="span">
            {views}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InsertCommentIcon color="disabled" sx={{ fontSize: '15px' }} />
          <Typography variant="span" component="span">
            {comments}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}
