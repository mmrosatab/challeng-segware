import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAuth } from "../../context/AuthContext";
import { feedsRequest } from "../../RequestProvider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Post from "../../components/Post";

const theme = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const inicialState = { id: "180", username: "carina" };

export default function Home() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState(inicialState);
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      const data = feedsRequest();
      setPosts(data);
      firstUpdate.current = false;
    }
  }, []);

  function handleClickLogout() {
    auth.logout();
    navigate("/");
  }

  function addLike() {
    console.log("Add like");
  }
  function addLove() {
    console.log("Add love");
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Posts
            </Typography>

            <Button color="inherit" type="submit" onClick={handleClickLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            width: 800,
            maxWidth: "100%",
            mt: 10,
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
              subheader={"createdAt"}
            />
            <CardContent>
              <TextField
                placeholder="Type something..."
                multiline
                fullWidth
                rows={1}
              />
            </CardContent>
          </Card>

          <Post addLike={addLike} addLove={addLove} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
