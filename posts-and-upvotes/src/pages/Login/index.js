import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const URL_SIGN_IN = "https://segware-book-api.segware.io/api/sign-in";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  function loginDataIsEmpty() {
    return username.length === 0 || password.length === 0;
  }

  function handleClickSignIn() {
    const loginData = {
      username: username,
      password: password,
    };

    if (loginDataIsEmpty()) {
      return;
    }

    sendRequest(loginData);
  }

  function sendRequest(loginData) {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };

    fetch(URL_SIGN_IN, requestOptions)
      .then((response) => response.json())
      .then((data) => setToken(data))
      .catch((error) => console.error(`Error: ${console.error()}`));
  }

  function handleClickForgotPassword() {}
  function handleSuccessLogin() {}
  function handleFailLogin() {}

  return (
    <main>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => handleClickSignIn()}>Sign in</button>
      <Link to="/forgot-password">Forgot Password</Link>
    </main>
  );
}
