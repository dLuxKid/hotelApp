import React from "react";
import "../styles/roomsContainerCard.css";
import { useNavigate } from "react-router-dom";

const RoomsContainerCard = ({
  imgUrl,
  type,
  bedType,
  occupancy,
  order,
  id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/rooms/${id}`);
  };

  return (
    <div className={`roomCardContainer ${order}`}>
      <img src={imgUrl} alt="bedroom" />
      <div className="aboutRoom">
        <div className="roomType" onClick={handleClick}>
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
