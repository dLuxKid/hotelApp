import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { AuthRouter } from "./ProtectedRoutes";
import PublicRouter from "./ProtectedRoutes";

const Routers = () => {
  return (
    <Routes>
      <Route element={<AuthRouter />}>
        <Route exact path="/" element={<Register />} />
      </Route>
      <Route element={<PublicRouter />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Routers;
