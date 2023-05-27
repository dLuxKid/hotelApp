import React from "react";
import ImageHolder from "../components/ImageHolder";
import bedroom from "../assets/bedroom.png";
import "../styles/bookings.css";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../contexts/context";
import useCollection from "../hook/useCollection";

const Bookings = () => {
  document.title = "reservations";
  const navigate = useNavigate();

  const { currentUser } = useAuthProvider();
  const { reservation } = useCollection(currentUser.uid);
  return (
    <main>
      <ImageHolder imgUrl={bedroom} alt={"bedroom"} />
      <section>
        {!reservation ? (
          <div className="noReservation">
            <h1>You have no reservations...</h1>
            <button onClick={() => navigate("/home")}>
              <p>Make reservation</p>
            </button>
          </div>
        ) : (
          <div>{reservation.price}</div>
        )}
      </section>
    </main>
  );
};

export default Bookings;
