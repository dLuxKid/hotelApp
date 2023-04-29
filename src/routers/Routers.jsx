import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { AuthRouter } from "./ProtectedRoutes";
import PublicRouter from "./ProtectedRoutes";
import Rooms from "../pages/Rooms";
import AboutRooms from "../pages/AboutRooms";
import About from "../pages/About";
import Dining from "../pages/Dining";

const Routers = () => {
  return (
    <Routes>
      <Route element={<AuthRouter />}>
        <Route exact path="/" element={<Register />} />
      </Route>
      <Route element={<PublicRouter />}>
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<AboutRooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/dining" element={<Dining />} />
      </Route>
    </Routes>
  );
};

export default Routers;
