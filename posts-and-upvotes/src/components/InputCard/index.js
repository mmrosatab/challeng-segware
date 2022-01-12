import { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

export default function InputCard({ username, handleClickPost }) {
  const [content, setContent] = useState("");

  function handleClick() {
    handleClickPost(content);
    setContent("");
  }

  return (
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
          margin="normal"
          required
          fullWidth
          autoComplete="username"
          autoFocus
          rows={1}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </CardContent>
      <CardActions disableSpacing>
        <Button fullWidth variant="contained" onClick={handleClick}>
          Publish
        </Button>
      </CardActions>
    </Card>
  );
}
