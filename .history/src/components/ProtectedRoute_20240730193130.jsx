import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ 
  isLoggedIn, 
  children,
  annonymous = false,
 }) {
  const location = useLocation();
}

export default ProtectedRoute;