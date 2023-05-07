import React from "react";
import ImageHolder from "../components/ImageHolder";
import outsideView from "../assets/outside.jpg";
import "../styles/dining.css";
import food1 from "../assets/food1.jpeg";
import food2 from "../assets/food2.jpeg";
import food3 from "../assets/food3.jpg";
import restaurant from "../assets/restaurant.jpg";

const Dining = () => {
  document.title = " dining view";
  return (
    <main>
      <ImageHolder imgUrl={outsideView} alt={"restaurant"} />
      <section>
        <div className="headerContainer">
          <div className="lightBg"></div>
          <h1>Dining Hotel Jubilant Midrand</h1>
          <p>Enjoy Food and Drinks Offered</p>
          <h3>At this hotel</h3>
        </div>
        <div className="aboutRestaurant">
          <div className="restaurantImgs">
            <img src={food3} alt={"food"} />
            <img src={food1} alt={"food"} />
            <img src={food2} alt={"food"} />
          </div>
          <div className="restaurantText">
            <p>
              A combination of Chicago, burlesque glamour and exquisite
              elegance, Eclipse Restaurant holds true to its name – meaning when
              the sun, earth or moon cross paths to create a special magic show.
              The quirky and stylish interior is over-the-top in the best way
              possible, boasting the perfect blend of vibrant, modern colours,
              plush velvet, wood and custom furniture pieces – think black and
              gold leopard and zebra print dining chairs, crystal chandeliers
              that make for a glittering attraction and a myriad of unique
              accessories to add the final touches. Just like the proudly
              African culture, the bright and colourful space has been designed
              to dazzle and adds a lot more than a little sparkle to the City of
              Gold. Set to shake up Johannesburg’s dining scene, at Eclipse
              Restaurant the excitement goes beyond what’s on your plate.{" "}
            </p>
            <p>
              Hotel guests and visitors can look forward to an eclectic à la
              carte menu of flavourful dishes and invigorating cocktails coupled
              with live entertainment on select evenings. From live music to
              cabaret cavorts, burlesque beauties and amazing theatrical acts,
              as you enter into the magical world of delectable cuisine, live
              entertainment and sumptuous design, you enter into an enchanting
              experience. What’s more, if you fancy a panorama with your meal,
              you’ve come to the right place as the floor-to-ceiling windows
              afford gorgeous city views. Choose between the opulent dining room
              or bar area, or the sun-drenched open terrace.
            </p>
          </div>
        </div>
        <div className="aboutRestaurant">
          <div className="restaurantText">
            <p>
              Planning a special date night or romantic proposal? Looking for
              Ayia Napa restaurants that combine the finest food with the
              dreamiest atmosphere? You and your partner will be floating on
              cloud nine the moment you enter Immenso. Occupying a prime
              position on the hotel’s rooftop, the sunsets here are what dreams
              are made of. Just drink up the panoramic views and whet your
              appetite as you peruse the menu featuring the finest Nikkei
              cuisine. All dishes have been inspired by Falser’s travels to Asia
              and Latin America. Your senses will be delighted with every bite
              under a blanket of sparkling stars.
            </p>
          </div>
          <div className="restaurantImgs">
            <img src={restaurant} alt="restaurant view" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dining;
