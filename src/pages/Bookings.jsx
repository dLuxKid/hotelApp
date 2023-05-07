import React from "react";
import ImageHolder from "../components/ImageHolder";
import bedroom from "../assets/bedroom.png";
import "../styles/bookings.css";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  document.title = "reservations";
  const navigate = useNavigate();
  return (
    <main>
      <ImageHolder imgUrl={bedroom} alt={"bedroom"} />
      <section>
        <div className="noReservation">
          <h1>You have no reservations...</h1>
          <button onClick={() => navigate("/home")}>
            <p>Make reservation</p>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Bookings;
