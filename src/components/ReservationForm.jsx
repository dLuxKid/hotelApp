import React from "react";
import "../styles/reservationForm.css";

const ReservationForm = () => {
  return (
    <form action="" className="reservationForm">
      <input
        autoFocus
        type="date"
        placeholder="CHECK-IN DATE"
        // onChange={}
        autoCapitalize="false"
        name="email"
        // onBlur={}
        // value={}
        required
      />
      <input
        autoFocus
        type="date"
        placeholder="CHECK-OUT DATE"
        // onChange={}
        inputMode=""
        autoCapitalize="false"
        name=""
        // onBlur={}
        // value={}
        required
      />
      <input
        autoFocus
        type="text"
        placeholder="No. of Adults"
        // onChange={}
        inputMode=""
        autoCapitalize="false"
        name=""
        // onBlur={}
        // value={}
        required
      />
      <input
        autoFocus
        type="text"
        placeholder="No. of Children"
        // onChange={}
        inputMode=""
        autoCapitalize="false"
        name=""
        // onBlur={}
        // value={}
        required
      />

      <button>checkout now</button>
    </form>
  );
};

export default ReservationForm;
