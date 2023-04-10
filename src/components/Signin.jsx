import React, { useState, useReducer, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./authStyles.css";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthProvider } from "../contexts/context";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};

const Signin = () => {
  const { setCurrentUser } = useAuthProvider();

  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);

  const [isValid, setIsValid] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

  const validateName = () => {};
  const validateEmail = () => {};
  const validatePassword = () => {};
  const validateConfirmPassword = () => {};

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input
        autoFocus
        type="text"
        placeholder="enter username"
        onChange={handleChange}
        inputMode="text"
        autoCapitalize="false"
        name="username"
        onBlur={validateName}
        value={state.username}
        required
      />
      <input
        autoFocus
        type="text"
        placeholder="enter email"
        onChange={handleChange}
        inputMode="email"
        autoCapitalize="false"
        name="email"
        onBlur={validateEmail}
        value={state.email}
        required
      />
      <input
        type="text"
        placeholder="password"
        inputMode="password"
        autoCapitalize="false"
        name="password"
        onBlur={validatePassword}
        onChange={handleChange}
        value={state.password}
        required
      />
      <input
        type="text"
        placeholder="confirm password"
        inputMode="password"
        autoCapitalize="false"
        name="password"
        onBlur={validateConfirmPassword}
        onChange={handleChange}
        value={state.confirmPassword}
        required
      />
      <div className="authBtnContainer">
        <p>Recover Password?</p>
        <button onClick={handleSubmit}>Sign in</button>
        <div className="horizontalDash">
          <div></div>
          <div></div>
        </div>
      </div>
    </form>
  );
};

export default Signin;
