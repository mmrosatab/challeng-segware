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

  async function login(username, password) {
    // const token = await signInRequest(username, password);
    const token = "Ksdfsdfsrsrf";
    setToken(token);
    setTokenLocalStorage(token);
  }

  function logout() {
    setToken(null);
    removeTokenLocalStorage();
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
