import React, { lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Loader from "../components/Loader";

const Register = lazy(() => import("../pages/Register"));
const Home = lazy(() => import("../pages/Home"));
const Rooms = lazy(() => import("../pages/Rooms"));
const AboutRooms = lazy(() => import("../pages/AboutRooms"));
const About = lazy(() => import("../pages/About"));
const Dining = lazy(() => import("../pages/Dining"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Bookings = lazy(() => import("../pages/Bookings"));

import { useAuthProvider } from "../contexts/context";

const Routers = () => {
  const { currentUser } = useAuthProvider();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          exact
          path="/"
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
    </Suspense>
  );
};

export default Routers;
