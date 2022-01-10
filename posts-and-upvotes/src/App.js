import { BrowserRouter, Routes, Route } from "react-router-dom";
import "normalize.css";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthProvider";
import { RequireAuth, AlreadyAuth } from "./components/RequireAuth";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <AlreadyAuth>
                <SignIn />
              </AlreadyAuth>
            }
          />
          <Route path="/forgot-password" exact element={<ForgotPassword />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route
            path="/home"
            exact
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
