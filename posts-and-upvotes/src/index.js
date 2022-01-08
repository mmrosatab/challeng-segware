import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/forgot-password" exact element={<ForgotPassword />} />
        <Route path="/home" exact element={<Home />} />
        {/* <Route path="/changepassword" exact element={<ChangePassword />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
