import { useEffect, useState } from "react";
import Login from "./pages/Login";
const URL_SIGN_UP = "https://segware-book-api.segware.io/api/sign-in";
const URL_FEEDS = "https://segware-book-api.segware.io/api/feeds";
const URL_FEED = "https://segware-book-api.segware.io/api/feed";
const URL_REACTION = "https://segware-book-api.segware.io/api/reaction";

function App() {
  return (
    <div>
      <header></header>
      <main>
        <Login />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
