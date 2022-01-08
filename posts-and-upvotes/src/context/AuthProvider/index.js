import React, { createContext, useEffect, useState } from "react";
import {
  getTokenLocalStorage,
  removeTokenLocalStorage,
  setTokenLocalStorage,
  LoginRequest,
} from "../AuthContext/util";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = getTokenLocalStorage();

    if (token) {
      setToken(token);
    }
  }, []);

  // after change for sign in vs sign out
  async function authenticate(username, password) {
    const response = await LoginRequest(username, password);
    const token = response.data;
    setTokenLocalStorage(token);
  }

  function logout() {
    removeTokenLocalStorage();
  }

  return (
    <AuthContext.Provider value={{ ...token, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
