import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthProvider } from "../contexts/context";

export const AuthRouter = () => {
  const { currentUser } = useAuthProvider();

  return !currentUser?.uid ? <Outlet /> : <Navigate to="/" />;
};

const PublicRouter = () => {
  const { currentUser } = useAuthProvider();

  return currentUser?.uid ? <Outlet /> : <Navigate to="/register" />;
};

export default PublicRouter