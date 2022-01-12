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
// import { blue } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

export default function Post({ post, addLike, addLove }) {
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
              {post.author.username.charAt(0)}
            </Avatar>
          }
          title={post.author.username}
          subheader={post.createdAt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={() => addLove(post.id)} aria-label="love">
            <FavoriteIcon />
          </IconButton>
          <IconButton>{post.loves}</IconButton>
          <IconButton onClick={() => addLike(post.id)} aria-label="like">
            <ThumbUpIcon />
          </IconButton>
          <IconButton>{post.likes}</IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
