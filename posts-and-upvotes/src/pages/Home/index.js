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
import Post from "../../components/Post";

const theme = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

export default function Home() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 800,
              maxWidth: "100%",
              mt: 3,
            }}
          >
            <TextField
              placeholder="Type something..."
              multiline
              fullWidth
              rows={2}
            />
          </Box>

          <Box
            sx={{
              width: 800,
              maxWidth: "100%",
              mt: 3,
            }}
          >
            <Post />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
