import React from "react";
import "../styles/rooms.css";
import ImageHolder from "../components/ImageHolder";
import bedroom from "../assets/bedroom.png";
import { hotelRooms } from "../data/data";
import RoomsContainerCard from "../components/RoomsContainerCard";

const Rooms = () => {

  return (
    <main>
      <ImageHolder imgUrl={bedroom} alt={"bedroom"} />
      <section className="roomsSection">
        <div className="roomsHeader">
          <h1>Type of Rooms Available</h1>
        </div>
        <div className="roomsContainer">
          {hotelRooms.map((item) => (
            <RoomsContainerCard
              order={item.id % 2 == 0 ? "row-reverse" : "row"}
              key={item.id}
              type={item.type}
              bedType={item.bedType}
              occupancy={item.occupancy}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Rooms;
