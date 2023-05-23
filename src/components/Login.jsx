import React, { useState, useReducer, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/authStyles.css";
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

  const [pending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

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
    setError(null);
    if (isValid.email && isValid.password) {
      setIsPending(true);
      signInWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setCurrentUser(user);
          setError(null);
          setIsPending(false);
          navigate("/home");
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    } else {
      setError("Invalid Details");
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
        className={`big_mb ${error && "border_red"}`}
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
        className={`big_mb ${error && "border_red"}`}
      />
      <div className="authBtnContainer">
        <p>Recover Password?</p>
        {pending && <button disabled>Loading..</button>}
        {!pending && <button onClick={handleSubmit}>Sign in</button>}
        {error && <h3> {error} </h3>}
        <div className="horizontalDash">
          <div></div>
          <div></div>
        </div>
      </div>
    </form>
  );
};

export default Login;
