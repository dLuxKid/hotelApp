import React from "react";
import { Icon } from "@iconify/react";
import "../styles/offerListCard.css";
import { useNavigate } from "react-router-dom";

const OfferListCard = ({ img, type, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/rooms/${id}`);
  };

  return (
    <div className="offerListCard">
      <div className="offerListName">
        <img src={img} alt={"bedroom"} />
        <p>{type}</p>
      </div>
      <div className="offerListBookNow" onClick={handleClick}>
        <p>Book Now</p>
      </div>
    </div>
  );
};

export default OfferListCard;
