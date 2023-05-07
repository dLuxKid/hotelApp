import React, { useState } from "react";
import ImageHolder from "../components/ImageHolder";
import bedroom from "../assets/bedroom.png";
import beachview from "../assets/beachview.jpg";
import "../styles/register.css";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Register = () => {
  document.title = "welcome";

  const [click, setClick] = useState("signin");

  return (
    <>
      <ImageHolder imgUrl={bedroom} alt="bedroom" />
      <section className="authSection">
        <div className="authMenu">
          <div onClick={() => setClick("signin")}>
            <p className={click === "signin" && "border_bottom"}>Sign in</p>
          </div>
          <div onClick={() => setClick("register")}>
            <p>Register</p>
          </div>
        </div>
        <div className="authForm">
          <div className="authImgContainer">
            <img src={beachview} alt="beachview" />
          </div>
          <div className="authFormContainer">
            {click === "signin" ? <Login /> : <Signup />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
