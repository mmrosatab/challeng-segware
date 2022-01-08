import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
// import RequireAuth from "./RequireAuth";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/forgot-password" exact element={<ForgotPassword />} />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
