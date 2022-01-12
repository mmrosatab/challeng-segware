import { Link as LinkRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

export default function NotFound() {
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
          <Typography component="h1" variant="h2">
            404
          </Typography>

          <Typography component="h1" variant="h2">
            Page not found
          </Typography>

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body2">
              <LinkRouter to="/">{"Sign In"}</LinkRouter>
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
