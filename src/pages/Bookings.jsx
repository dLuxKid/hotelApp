import React from "react";
import ImageHolder from "../components/ImageHolder";
import bedroom from "../assets/bedroom.png";
import "../styles/bookings.css";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../contexts/context";
import useCollection from "../hook/useCollection";
import { useFirestore } from "../hook/useFirestore";

const Bookings = () => {
  document.title = "reservations";
  const navigate = useNavigate();

  const { currentUser } = useAuthProvider();
  const { reservation } = useCollection(currentUser.uid);
  const { deleteData, error } = useFirestore();

  const handleDelete = (uid) => {
    deleteData(uid);
  };

  return (
    <main>
      <ImageHolder imgUrl={bedroom} alt={"bedroom"} />
      <section>
        {!reservation.length ? (
          <div className="noReservation">
            <h1>You have no reservations...</h1>
            <button onClick={() => navigate("/home")}>
              <p>Make reservation</p>
            </button>
          </div>
        ) : (
          <div>
            {reservation.map((reservations, index) => (
              <div className="bookedCardContainer" key={index}>
                <div className="bookedImageContainer">
                  <img src={reservations.imgUrl} alt="bedroom" />
                </div>
                <div className="bookedSuiteInformation">
                  <ul>
                    <li>
                      <h3>{reservations.type}</h3>
                    </li>
                    <li>
                      <p>
                        <span>{reservations.adults}</span> adult(s)
                      </p>
                    </li>
                    {reservations?.children && (
                      <li>
                        <p>
                          <span>{reservations.children}</span>
                        </p>
                      </li>
                    )}
                    <li>
                      <p>
                        Arrival Date: <span>{reservations.arrival}</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Departure Date: <span>{reservations.departure}</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Price: <span>${reservations.totalPrice}</span>
                      </p>
                    </li>
                    <button onClick={() => handleDelete(reservations.id)}>
                      Delete reservation
                    </button>
                    {error && <li>{error}</li>}
                  </ul>
                </div>
              </div>
            ))}
            <div>
              <h1>Total:{}</h1>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Bookings;
