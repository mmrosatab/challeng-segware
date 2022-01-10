import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAuth } from "../../context/AuthContext";
import { feedsRequest } from "../../RequestProvider";
const theme = createTheme();

export default function Home() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  async function getPost() {
    const data = await feedsRequest();
    console.log(data);
  }

  function handleClickLogout() {
    auth.logout();
    navigate("/");
  }

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Posts
          </Typography>
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
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            tttt
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={getPost}
            >
              get
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClickLogout}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
