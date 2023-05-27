import React from "react";
import { useParams } from "react-router-dom";
import { hotelRooms } from "../data/data";
import ImageHolder from "../components/ImageHolder";
import bedroom from "../assets/bedroom.png";
import "../styles/aboutRooms.css";
import ReservationForm from "../components/ReservationForm";

const AboutRooms = () => {
  const { id } = useParams();

  document.title = "suite " + id;

  const room = hotelRooms.filter((item) => item.id == id);
  const suite = room[0];

  return (
    <main>
      <ImageHolder imgUrl={bedroom} alt={"bedroom"} />
      <section className="suiteSection">
        <div className="chosenSuite">
          <div className="roomHeader">
            <h1>{suite.type}</h1>
          </div>
          <div className="roomImg">
            <img src={suite.imgUrl} alt="bed" />
          </div>
          <div className="aboutSuite">
            <h1>DETAILS</h1>
            <div className="amenities">
              <h3>price</h3>
              <p>${suite.price}</p>
              <h3>Bed type</h3>
              <p>{suite.bedType}</p>
              <h3>amenities</h3>
              {suite.amenities.map((item) => (
                <p>{item}</p>
              ))}
              {/* <h3>Availability</h3> */}
              <h3 style={{ marginTop: "2rem" }}>reservation form</h3>
              <ReservationForm suite={suite} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutRooms;
