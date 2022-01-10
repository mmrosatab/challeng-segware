import React, { useState } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAuth } from "../../context/AuthContext";
import { emptyOrOnlySpaces } from "../utils";

const theme = createTheme();

export default function SignIn() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [open, setOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (emptyOrOnlySpaces(username, password)) return;

    try {
      const value = await auth.login(username, password);
      if (value) {
        navigate("/home");
        return;
      }
    } catch (error) {
      console.log(error);
    }
    setMessage("This user does not exist");
    setUsername("");
    setPassword("");
  }

  function handleClose() {
    setOpen(false);
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
              value={username}
              onChange={(event) => setUsername(event.target.value)}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
            {message !== null ? (
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title-sign-in">
                  {"Sign In"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description-sign-in">
                    {message}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autoFocus>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
