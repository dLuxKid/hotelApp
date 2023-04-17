import React from "react";
import ImageHolder from "../components/ImageHolder";
import bedroom from "../assets/bedroom.png";
import "../styles/home.css";
import { hotelRooms } from "../data/data";
import OfferListCard from "../components/OfferListCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <ImageHolder imgUrl={bedroom} alt="bedroom" />
      <section className="homeSection">
        <div className="specialOffer_Container">
          <div className="specialOffer">
            <div className="specialOffer_Header">
              <h3>Special Offer</h3>
            </div>
            <div className="specialOfferList_Contianer">
              {hotelRooms.map((item) => (
                <OfferListCard
                  key={item.id}
                  img={item.imgUrl}
                  type={item.type}
                />
              ))}
            </div>
          </div>
          <div className="bookNow_Container">
            <h3>Book your perfect deals</h3>
            <button onClick={() => navigate("/rooms")}>Book now</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
