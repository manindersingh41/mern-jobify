import React from "react";
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";
import { Loading } from "../components";
const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();
  if (userLoading) return <Loading />;
  return !user ? <Navigate to="/landing" /> : children;
};

export default ProtectedRoute;
