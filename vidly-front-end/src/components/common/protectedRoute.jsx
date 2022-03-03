import React from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ children, ...rest }) => {
  const location = useLocation();
  if (!auth.getCurrentUser())
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  return children ? children : <Navigate replace to="/" />;
};

export default ProtectedRoute;
