import { useEffect, useState } from "react";

const URL_SIGN_IN = "https://segware-book-api.segware.io/api/sign-in";
const URL_FORGOT_PASSWORD =
  "https://segware-book-api.segware.io/api/forgot-passward/{username}";

export default function Login() {
  useEffect(() => {}, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  function handleChangeUsername(event) {
    const value = event.target.value;
    if (value.length > 0) setUsername(value);
  }

  function handleChangePassword(event) {
    const value = event.target.value;
    if (value.length > 0) setPassword(value);
  }

  function userDataIsEmpty() {
    return username.length === 0 && password.length === 0;
  }

  function userNotExists() {
    return "usernotexists";
  }

  function handleClickSignIn() {
    const userData = {
      username: username,
      password: password,
    };

    if (userDataIsEmpty()) {
      return;
    }

    fetch(URL_SIGN_IN, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(`Error: ${console.error()}`));
  }

  function handleClickForgotPassword() {}

  return (
    <section>
      <input
        value={username}
        onChange={(event) => handleChangeUsername(event)}
      />
      <input
        value={password}
        onChange={(event) => handleChangePassword(event)}
      />
      <button onClick={() => handleClickSignIn()}>Sign in</button>
      <button onClick={() => handleClickForgotPassword()}>
        Forgot Password
      </button>
    </section>
  );
}
