import React, { createContext, useEffect, useState } from "react";
import {
  getTokenLocalStorage,
  removeTokenLocalStorage,
  setTokenLocalStorage,
} from "../LocalStoreProvider";

import { signInRequest } from "../../RequestProvider";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(getTokenLocalStorage());

  useEffect(() => {
    const token = getTokenLocalStorage();

    if (token) {
      setToken(token);
    }
  }, []);

  // after change for sign in vs sign out
  async function authenticate(username, password) {
    const token = await signInRequest(username, password);
    setTokenLocalStorage(token);
  }

  function logout() {
    removeTokenLocalStorage();
  }

  let value = { token, authenticate, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
