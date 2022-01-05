import { useEffect, useState } from "react";

const URL_SIGN_IN = "https://segware-book-api.segware.io/api/sign-in";
const URL_SIGN_UP = "https://segware-book-api.segware.io/api/sign-in";
const URL_SIGN_FORGOT_PASSWORD =
  "https://segware-book-api.segware.io/api/forgot-passward/{username}";
const URL_FEEDS = "https://segware-book-api.segware.io/api/feeds";
const URL_FEED = "https://segware-book-api.segware.io/api/feed";
const URL_REACTION = "https://segware-book-api.segware.io/api/reaction";

function App() {
  useEffect(() => {}, []);

  function handleClick() {
    const data = {
      username: "string",
      password: "string",
    };

    fetch(URL_SIGN_IN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(`Error: ${console.error()}`));
  }

  return (
    <div>
      <header></header>
      <main>
        <button onClick={() => handleClick()}>Click</button>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
