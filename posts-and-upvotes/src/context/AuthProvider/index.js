import React, { createContext, useEffect, useState } from "react";
import {
  getTokenLocalStorage,
  removeTokenLocalStorage,
  setTokenLocalStorage,
  setUsernameLocalStorage,
  removeUsernameLocalStorage,
} from "../LocalStoreProvider";

import { signInRequest } from "../../RequestProvider";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(getTokenLocalStorage());

  useEffect(() => {
    const actualToken = getTokenLocalStorage();

    if (actualToken) {
      setToken(actualToken);
    }
  }, []);

  async function login(username, password) {
    const actualToken = await signInRequest(username, password);
    if (actualToken) {
      setToken(actualToken);
      setTokenLocalStorage(actualToken);
      setUsernameLocalStorage(username);
      return true;
    }
  }

  function logout() {
    setToken(null);
    removeTokenLocalStorage();
    removeUsernameLocalStorage();
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
