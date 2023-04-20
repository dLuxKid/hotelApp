import React from "react";
import { useParams } from "react-router-dom";
import { hotelRooms } from "../data/data";
import { useEffect } from "react";

const AboutRooms = () => {
  const { id } = useParams();

  useEffect(() => {
    const suitePicked = () => {
      const suite = hotelRooms.filter((item) => item.id == id);
      console.log(suite);
      return suite;
    };
    suitePicked();
  }, []);

  return <div>AboutRooms</div>;
};

export default AboutRooms;
