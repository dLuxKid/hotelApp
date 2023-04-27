import React, { useReducer } from "react";
import "../styles/reservationForm.css";

const initialState = {
  arrival: "",
  departure: "",
  adults: "",
  children: "",
};

const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};

const ReservationForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form action="" className="reservationForm">
      <input
        autoFocus
        type="date"
        placeholder="CHECK-IN DATE"
        onChange={handleChange}
        autoCapitalize="false"
        inputMode="numeric"
        name="arrival"
        // onBlur={}
        value={state.arrival}
        required
      />
      <input
        autoFocus
        type="date"
        placeholder="CHECK-OUT DATE"
        onChange={handleChange}
        inputMode="numeric"
        autoCapitalize="false"
        name="departure"
        // onBlur={}
        value={state.departure}
        required
      />
      <input
        autoFocus
        type="text"
        placeholder="NO. of ADULTS"
        onChange={handleChange}
        inputMode="numeric"
        autoCapitalize="false"
        name="adults"
        // onBlur={}
        value={state.adults}
        required
      />
      <input
        autoFocus
        type="text"
        placeholder="NO. of CHILDREN"
        onChange={handleChange}
        inputMode="numeric"
        autoCapitalize="false"
        name="children"
        // onBlur={}
        value={state.children}
        required
      />

      <button onClick={handleSubmit}>checkout now</button>
    </form>
  );
};

export default ReservationForm;
