import React from "react";
import "../styles/about.css";
import view1 from "../assets/view.jpeg";
import view2 from "../assets/view1.jpg";
import ImageHolder from "../components/ImageHolder";
import bedroom from "../assets/bedroom.png";

const aboutHotel = [
  {
    text: "Radisson Hotel Group is committed to creating exceptional guest experiences and being the preferred choice for travelers, owners, and talent around the world. We recognize that diversity is a crucial element of our success and believe in fostering a culture of inclusivity that celebrates individual differences. Our commitment to ethical business practices is a cornerstone of our values, and we strive to maintain the highest standards of integrity in all of our dealings. We believe in being responsible corporate citizens and making a positive impact in the communities where we operate. With a presence in 120 countries across five continents, we offer nine distinctive hotel brands that cater to a wide range of travelers. From luxurious accommodations to affordable options, we have a portfolio of hotels that can meet the needs of any guest. We are always looking for new opportunities to expand our brand and create new partnerships that generate synergies and drive growth. At Radisson Hotel Group, we are passionate about providing exceptional service and creating memorable experiences for our guests. Whether you are traveling for business or pleasure, we are dedicated to making your stay unforgettable.",
    imgUrl: view1,
  },
  {
    text: "Radisson Hotel Group is committed to creating exceptional guest experiences and being the preferred choice for travelers, owners, and talent around the world. We recognize that diversity is a crucial element of our success and believe in fostering a culture of inclusivity that celebrates individual differences. Our commitment to ethical business practices is a cornerstone of our values, and we strive to maintain the highest standards of integrity in all of our dealings. We believe in being responsible corporate citizens and making a positive impact in the communities where we operate. With a presence in 120 countries across five continents, we offer nine distinctive hotel brands that cater to a wide range of travelers. From luxurious accommodations to affordable options, we have a portfolio of hotels that can meet the needs of any guest. We are always looking for new opportunities to expand our brand and create new partnerships that generate synergies and drive growth. At Radisson Hotel Group, we are passionate about providing exceptional service and creating memorable experiences for our guests. Whether you are traveling for business or pleasure, we are dedicated to making your stay unforgettable.",
    imgUrl: view2,
  },
];

const About = () => {
  return (
    <main>
      <ImageHolder imgUrl={bedroom} alt={"bedroom"} />
      <section>
        {aboutHotel.map((item, index) => (
          <div
            className="aboutHotel"
            key={index}
            style={{
              display: "flex",
              flexDirection: index == 1 ? "row-reverse" : "row",
            }}
          >
            <img src={item.imgUrl} alt="bedroom" />
            <p>{item.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default About;
