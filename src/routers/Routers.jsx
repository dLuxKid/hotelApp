import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import AboutRooms from "../pages/AboutRooms";
import About from "../pages/About";
import Dining from "../pages/Dining";
import Gallery from "../pages/Gallery";
import Bookings from "../pages/Bookings";
import { useAuthProvider } from "../contexts/context";

const Routers = () => {
  const { currentUser } = useAuthProvider();
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={!currentUser?.uid ? <Register /> : <Navigate to="/home" />}
      />
      <Route
        exact
        path="*"
        element={!currentUser?.uid ? <Register /> : <Navigate to="/home" />}
      />
      <Route element={currentUser?.uid ? <Outlet /> : <Navigate to="/" />}>
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<AboutRooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Bookings />} />
      </Route>
    </Routes>
  );
};

export default Routers;
