import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PublicRoute({ children }) {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/success" replace />;
  }

  return children;
}

export default PublicRoute;
