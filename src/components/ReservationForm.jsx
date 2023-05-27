import React, { useReducer, useState } from "react";
import "../styles/reservationForm.css";
import { useFirestore } from "../hook/useFirestore";
import { useAuthProvider } from "../contexts/context";
import { useEffect } from "react";

const initialState = {
  arrival: "",
  departure: "",
  adults: "",
  children: "",
};

const reducer = (state, action) => {
  if (action.type == "reservation_made") {
    return {
      arrival: "",
      departure: "",
      adults: "",
      children: "",
    };
  }
  return { ...state, [action.input]: action.value };
};

const ReservationForm = ({ suite }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [reserved, setReserved] = useState("");

  const { addData, reservation, error, success } = useFirestore();
  const { currentUser } = useAuthProvider();

  const handleChange = (e) => {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (reservation) {
      setReserved("You already have a reservation");
    } else {
      if (
        state.arrival &&
        state.departure &&
        (state.adults || state.children)
      ) {
        addData(currentUser.uid, state, suite);
      }
    }
  };

  useEffect(() => {
    if (success) {
      dispatch({ type: "reservation_made" });
      setReserved("Reservation successful");
    }
  }, [success]);

  return (
    <form action="" className="reservationForm">
      <input
        type="date"
        placeholder="CHECK-IN DATE"
        onChange={handleChange}
        autoCapitalize="false"
        inputMode="numeric"
        name="arrival"
        value={state.arrival}
        required
      />
      <input
        type="date"
        placeholder="CHECK-OUT DATE"
        onChange={handleChange}
        inputMode="numeric"
        autoCapitalize="false"
        name="departure"
        value={state.departure}
        required
      />
      <input
        type="text"
        placeholder="NO. of ADULTS"
        onChange={handleChange}
        inputMode="numeric"
        autoCapitalize="false"
        name="adults"
        value={state.adults}
        required
      />
      <input
        type="text"
        placeholder="NO. of CHILDREN"
        onChange={handleChange}
        inputMode="numeric"
        autoCapitalize="false"
        name="children"
        value={state.children}
        required
      />

      <button onClick={handleSubmit}>checkout now</button>
      {reserved && <p>{reserved}</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default ReservationForm;
