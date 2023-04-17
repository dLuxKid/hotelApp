import React from "react";
import '../styles/roomsContainerCard.css'

const RoomsContainerCard = ({ imgUrl, type, bedType, occupancy, order }) => {
  return (
    <div
      className="roomCardContainer"
      style={{ display: "flex", flexDirection: order }}
    >
      <img src={imgUrl} alt="bedroom" />
      <div className="aboutRoom">
        <div className="roomType">
          <h1>{type}</h1>
        </div>
        <div className="roomType">
          <h3>Bed Space</h3>
          <p>{occupancy} people</p>
        </div>
        <div className="roomType">
          <h3>Bed Type</h3> <p>{bedType}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomsContainerCard;
