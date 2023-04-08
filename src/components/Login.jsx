import React, { useState, useReducer, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./authStyles.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const initialState = {
  token: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};

const Login = () => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState({
    name: true,
    password: true,
  });
  const [isFormValid, setIsFormValid] = useState(false);

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
    if (emailRegex < 0) {
      setIsValid((prev) => ({ ...prev, name: false }));
    } else {
      setIsValid((prev) => ({ ...prev, name: true }));
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

  const validateState = useCallback(() => {
    setIsFormValid(isValid.name && isValid.password ? true : false);
    console.log(isFormValid, isValid);
  }, [state.email, state.password]);

  useEffect(() => {
    validateEmail();
    validatePassword();
    validateState();
  }, [
    state.email,
    state.password,
    validateEmail,
    validatePassword,
    validateState,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateState();
    if (isFormValid) {
      const auth = getAuth();
      auth.createUserWithEmailAndPassword( state.email, state.password)
        .then((userCredential) => {
          const user = userCredential.user;
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
