import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ 
  isLoggedIn, 
  children,
  annonymou }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;