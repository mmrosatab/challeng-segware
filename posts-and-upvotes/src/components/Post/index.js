import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

export default function Post({ post, addLike, addLove }) {
  const [author, setAuthor] = useState(post.author);
  const [createdAt, setCreatedAt] = useState(post.createdAt);
  const [updatedAt, setUpdatedAt] = useState(post.updatedAt);
  const [likes, setLikes] = useState(post.likes);
  const [loves, setLoves] = useState(post.loves);
  const [content, setContent] = useState(post.content);
  const [id, setId] = useState(post.id);

  function handleLike() {}
  function handleLove() {}

  return (
    <Box
      sx={{
        width: 800,
        maxWidth: "100%",
        mt: 3,
      }}
    >
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {author.username.charAt(0)}
            </Avatar>
          }
          title={author.username}
          subheader={createdAt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={addLove} aria-label="love">
            <FavoriteIcon />
          </IconButton>
          <IconButton>{loves}</IconButton>
          <IconButton onClick={addLike} aria-label="like">
            <ThumbUpIcon />
          </IconButton>
          <IconButton>{likes}</IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
