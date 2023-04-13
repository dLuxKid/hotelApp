import React from "react";
import { Icon } from "@iconify/react";
import "../styles/offerListCard.css";

const OfferListCard = ({ img, type }) => {
  return (
    <div className="offerListCard">
      <div className="offerListName">
        <img src={img} alt={"bedroom"} />
        <p>{type}</p>
      </div>
      <div className="offerListBookNow">
        <p>Book Now</p>
        {/* <span>
          <Icon icon="material-symbols:arrow-right-rounded" />
        </span> */}
      </div>
    </div>
  );
};

export default OfferListCard;
