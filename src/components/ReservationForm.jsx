import React, { useReducer, useState } from "react";
import "../styles/reservationForm.css";
import { useFirestore } from "../hook/useFirestore";
import { useAuthProvider } from "../contexts/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const { addData, reservation, error, success, isPending } = useFirestore();
  const { currentUser } = useAuthProvider();

  const handleChange = (e) => {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

  const noOfDays = (arrival, departure) => {
    const arrivalDate = new Date(arrival);
    const departureDate = new Date(departure);
    const timeDiff = Math.abs(departureDate - arrivalDate);
    const numberOfDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return numberOfDays;
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
        const data = {
          ...state,
          uid: currentUser.uid,
          imgUrl: suite.imgUrl,
          totalPrice:
            noOfDays(state.arrival, state.departure) * Number(suite.price),
          type: suite.type,
        };
        addData(data);
      }
    }
  };

  useEffect(() => {
    if (success) {
      dispatch({ type: "reservation_made" });
      setReserved("Reservation successful");
      navigate("/booking");
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
      />
      <input
        type="date"
        placeholder="CHECK-OUT DATE"
        onChange={handleChange}
        inputMode="numeric"
        autoCapitalize="false"
        name="departure"
        value={state.departure}
      />
      <input
        type="text"
        placeholder="NO. of ADULTS"
        onChange={handleChange}
        inputMode="numeric"
        autoCapitalize="false"
        name="adults"
        value={state.adults}
      />
      <input
        type="text"
        placeholder="NO. of CHILDREN"
        onChange={handleChange}
        inputMode="numeric"
        autoCapitalize="false"
        name="children"
        value={state.children}
      />
      {!isPending && <button onClick={handleSubmit}>checkout now</button>}
      {isPending && <button disabled>Loading...</button>}

      {reserved && <p>{reserved}</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default ReservationForm;
