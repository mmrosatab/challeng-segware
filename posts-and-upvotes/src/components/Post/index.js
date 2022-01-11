import { useState, useEffect, useRef } from "react";
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

const inicialState = { id: "180", username: "carina" };

export default function Post() {
  const [author, setAuthor] = useState(inicialState);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [likes, setLikes] = useState(0);
  const [content, setContent] = useState("");
  const [id, setId] = useState("");

  function handleLike() {}
  function handleLove() {}

  return (
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ThumbUpIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
