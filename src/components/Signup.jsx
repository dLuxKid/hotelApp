import React, { useState, useReducer, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/authStyles.css";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

const Signup = () => {
  const { setCurrentUser } = useAuthProvider();

  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  const handleChange = (e) => {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

  const validateName = useCallback(() => {
    if (state.username.trim().length < 5) {
      setIsValid((prev) => ({ ...prev, name: false }));
    } else {
      setIsValid((prev) => ({ ...prev, name: true }));
    }
  }, [state.username]);

  const validateEmail = useCallback(() => {
    const emailRegex = state.email
      .toLowerCase()
      .trim()
      .search(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
    if (emailRegex < 0 && !state.email) {
      setIsValid((prev) => ({ ...prev, email: false }));
    } else {
      setIsValid((prev) => ({ ...prev, email: true }));
    }
  }, [state.email]);

  const validatePassword = useCallback(() => {
    const requiredPassword = state.password.search(/\w\d/g);
    if (state.password.trim().length < 8 && requiredPassword < 0) {
      setIsValid((prev) => ({ ...prev, password: false }));
    } else {
      setIsValid((prev) => ({ ...prev, password: true }));
    }
  }, [state.password]);

  const validateConfirmPassword = useCallback(() => {
    if (state.confirmPassword !== state.password) {
      setIsValid((prev) => ({ ...prev, confirmPassword: false }));
    } else {
      setIsValid((prev) => ({ ...prev, confirmPassword: true }));
    }
  }, [state.confirmPassword]);

  useEffect(() => {
    validateName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
  }, [
    state.username,
    state.email,
    state.password,
    state.confirmPassword,
    validateName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid.email && isValid.password) {
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setCurrentUser(user);
          navigate("/home");
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
        className="small_mb"
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
        className="small_mb"
      />
      <input
        type="password"
        placeholder="password"
        inputMode="password"
        autoCapitalize="false"
        name="password"
        onBlur={validatePassword}
        onChange={handleChange}
        value={state.password}
        required
        className="small_mb"
      />
      <input
        type="password"
        placeholder="confirm password"
        inputMode="password"
        autoCapitalize="false"
        name="confirmPassword"
        onBlur={validateConfirmPassword}
        onChange={handleChange}
        value={state.confirmPassword}
        required
        className="small_mb"
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

export default Signup;
