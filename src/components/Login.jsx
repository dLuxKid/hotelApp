import React, { useState, useReducer, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./authStyles.css";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthProvider } from "../contexts/context";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};

const Login = () => {
  const { setCurrentUser } = useAuthProvider();

  const navigate = useNavigate();
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

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

  useEffect(() => {
    validateEmail();
    validatePassword();
  }, [state.email, state.password, validateEmail, validatePassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid.email && isValid.password) {
      signInWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setCurrentUser(user);
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

export default Login;
