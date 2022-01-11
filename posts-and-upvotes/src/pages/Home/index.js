import React, { useEffect, useState, useRef } from "react";
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
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Post from "../../components/Post";
import CircularProgress from "@mui/material/CircularProgress";
import { getUsernameLocalStorage } from "../../context/LocalStoreProvider";

const theme = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

export default function Home() {
  const username = getUsernameLocalStorage();
  const auth = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      getFeeds();
      firstUpdate.current = false;
    }
  }, []);

  function handleClickLogout() {
    auth.logout();
    navigate("/");
  }

  async function getFeeds() {
    const data = await feedsRequest();
    setPosts(data);
  }

  function handleClickGet() {
    console.log(posts);
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
                  {username.charAt(0)}
                </Avatar>
              }
              title={username}
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

          {posts ? (
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  addLike={addLike}
                  addLove={addLove}
                  post={post}
                ></Post>
              );
            })
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                p: 1,
                m: 1,
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
