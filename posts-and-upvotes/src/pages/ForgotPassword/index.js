import { useState } from "react";

export default function ForgotPassword() {
  const [username, setUsername] = useState("");

  function usernameIsEmpty() {
    return username.length === 0;
  }

  function handleClickSend() {
    if (usernameIsEmpty()) {
      return;
    }
    sendRequest();
  }

  function sendRequest() {
    fetch(`https://segware-book-api.segware.io/api/forgot-password/${username}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(`Error: ${console.error()}`));
  }

  return (
    <main>
      <h2>Put your username</h2>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={() => handleClickSend()}>Send</button>
    </main>
  );
}
