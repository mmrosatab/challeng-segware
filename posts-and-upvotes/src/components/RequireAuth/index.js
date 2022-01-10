import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function RequireAuth({ children }) {
  let auth = useAuth();
  return auth.token ? children : <Navigate to="/" />;
}

export function AlreadyAuth({ children }) {
  let auth = useAuth();
  return auth.token ? <Navigate to="/home" /> : children;
}
