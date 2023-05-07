import React, { useState, useEffect, useCallback } from "react";
import ImageHolder from "../components/ImageHolder";
import bedroom from "../assets/bedroom.png";
import "../styles/home.css";
import { hotelRooms } from "../data/data";
import OfferListCard from "../components/OfferListCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  document.title = "Home";

  return (
    <main>
      <ImageHolder imgUrl={bedroom} alt="bedroom" />
      <section className="homeSection">
        <div className="specialOffer_Container">
          <div className="specialOffer">
            <div className="specialOffer_Header">
              <h3>Special Offer</h3>
              <p onClick={() => navigate("/rooms")}>View all</p>
            </div>
            <div className="specialOfferList_Contianer">
              {hotelRooms.map((item, index) => (
                <OfferListCard
                  key={index}
                  id={item.id}
                  img={item.imgUrl}
                  type={item.type}
                />
              ))}
            </div>
          </div>
          <div className="bookNow_Container">
            <h3>Book your perfect deals</h3>
            <button onClick={() => navigate("/rooms")}>
              <p>Book now</p>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
