import React, { useState } from "react";
import ImageHolder from "../../components/ImageHolder";
import bedroom from "../../assets/bedroom.png";
import beachview from "../../assets/beachview.jpg";
import "./register.css";
import Login from "../../components/Login";
import Signin from "../../components/Signin";

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
            <p className={click === "register" && "border_bottom"}>Register</p>
          </div>
        </div>
        <div className="authForm">
          <div className="authImgContainer">
            <img src={beachview} alt="beachview" />
          </div>
          <div className="authFormContainer">
            {click === "signin" ? <Login /> : <Signin />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
