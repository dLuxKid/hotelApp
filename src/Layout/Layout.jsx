import React from "react";
import "../styles/Layout.css";
import Navbar from "../components/Navbar";
import Routers from "../routers/Routers";
import { useAuthProvider } from "../contexts/context";

const Layout = () => {
  const { currentUser, authCheck } = useAuthProvider();

  if (!authCheck) {
    return (
      <div class="loadingio-spinner-spin-m3lqrc54ost">
        <div class="ldio-acwytrhokra">
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    );
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
