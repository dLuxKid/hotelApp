import React from "react";
import "../styles/Layout.css";
import Navbar from "../components/Navbar";
import Routers from "../routers/Routers";
import { useAuthProvider } from "../contexts/context";

const Layout = () => {
  const { currentUser, authCheck } = useAuthProvider();

  if (!authCheck) {
    return null;
  }

  if (authCheck) {
    return (
      <>
        <div className="bgTopImg"></div>
        {currentUser?.uid && <Navbar />}
        <Routers />
      </>
    );
  }
};

export default Layout;
