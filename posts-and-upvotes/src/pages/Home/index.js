import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAuth } from "../../context/AuthContext";
import { feedsRequest } from "../../RequestProvider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Post from "../../components/Post";
import CircularProgress from "@mui/material/CircularProgress";
import InputCard from "../../components/InputCard";
import { getUsernameLocalStorage } from "../../context/LocalStoreProvider";
import { likeRequest, loveRequest, feedRequest } from "../../RequestProvider";

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

  useEffect(() => {
    getFeeds();
  }, []);

  function handleClickLogout() {
    auth.logout();
    navigate("/");
  }

  async function getFeeds() {
    const data = await feedsRequest();
    setPosts(data);
  }

  async function handleClickPost(content) {
    const status = await feedRequest(content);
    if (status === 201) {
      getFeeds();
    }
  }

  async function addLike(id) {
    const status = await likeRequest(id, true);
    if (status === 200) {
      getFeeds();
    }
  }

  async function addLove(id) {
    const status = await loveRequest(id, true);
    if (status === 200) {
      getFeeds();
    }
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
          <InputCard username={username} handleClickPost={handleClickPost} />

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
