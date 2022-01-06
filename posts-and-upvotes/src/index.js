import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      {/* <Route path="/forgotpassword" exact element={<ForgotPassword />} /> */}
      <Route path="/home" exact element={<Home />} />
      {/* <Route path="/changepassword" exact element={<ChangePassword />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
