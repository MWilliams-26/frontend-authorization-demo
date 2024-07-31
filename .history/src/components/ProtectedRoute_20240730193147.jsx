import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ 
  isLoggedIn, 
  children,
  annonymous = false,
 }) {
  const location = useLocation();
  const from = location.state?.from 
}

export default ProtectedRoute;