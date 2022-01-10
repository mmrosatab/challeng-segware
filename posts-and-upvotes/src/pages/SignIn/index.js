import { Link as LinkRouter, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../context/AuthContext";

const theme = createTheme();

export default function SignIn() {
  const auth = useAuth();
  const navigate = useNavigate();

  function emptyOrOnlySpaces(username, password) {
    return username.trim().length === 0 || password.trim().length === 0;
  }

  // function handleInputChange() {}
  // function handleSuccessSignIn() {}
  // function handleFailSignIn() {}

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    if (emptyOrOnlySpaces(username, password)) return;

    // localStorage.removeItem("token");

    try {
      await auth.login(username, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2">
                  <LinkRouter to="/forgot-password">
                    Forgot password?
                  </LinkRouter>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <LinkRouter to="/sign-up">
                    {"Don't have an account? Sign up"}
                  </LinkRouter>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
