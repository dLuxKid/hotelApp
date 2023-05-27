import React from "react";
import "../styles/gallery.css";
import ImageHolder from "../components/ImageHolder";
import outsideView from "../assets/outside.jpg";
import reception1 from "../assets/reception1.jpg";
import reception2 from "../assets/reception2.jpg";
import reception3 from "../assets/reception3.jpg";
import dining1 from "../assets/dining1.jpg";
import dining2 from "../assets/dining2.jpg";
import dining3 from "../assets/dining3.jpg";
import dining4 from "../assets/dining4.jpg";
import dining5 from "../assets/dining5.jpg";
import dining6 from "../assets/dining6.jpg";
import singlebed1 from "../assets/singlebed1.jpg";
import singlebed2 from "../assets/singlebed2.jpg";
import doublebed1 from "../assets/doublebed1.jpg";
import doublebed2 from "../assets/doublebed2.jpg";
import doublebed3 from "../assets/doublebed3.jpg";
import poolbar1 from "../assets/poolbar1.jpg";
import poolbar2 from "../assets/poolbar2.jpg";
import poolbar3 from "../assets/poolbar3.jpg";

const Gallery = () => {
  document.title = "gallery view";
  return (
    <main>
      <ImageHolder imgUrl={outsideView} alt={"restaurant"} />
      <section>
        <div className="galleryHeader">
          <h1>
            HOTEL JUBILANT <span>GALLERY</span>
          </h1>
        </div>
        <div className="galleryTitle">
          <div className="galleryTitle_Header">
            <h3>reception</h3>
          </div>
          <div className="galleryImages">
            <img src={reception1} alt="reception" />
            <img src={reception2} alt="reception" />
            <img src={reception3} alt="reception" />
          </div>
        </div>
        <div className="galleryTitle">
          <div className="galleryTitle_Header">
            <h3>dining hotel jubilant</h3>
          </div>
          <div className="galleryImages">
            <img src={dining1} alt="dining view" />
            <img src={dining2} alt="dining view" />
            <img src={dining3} alt="dining view" />
            <img src={dining4} alt="dining view" />
            <img src={dining5} alt="dining view" />
            <img src={dining6} alt="dining view" />
          </div>
        </div>
        <div className="galleryTitle">
          <div className="galleryTitle_Header">
            <h3>single room</h3>
          </div>
          <div className="galleryImages">
            <img src={singlebed1} alt="single room" />
            <img src={singlebed2} alt="single room" />
          </div>
        </div>
        <div className="galleryTitle">
          <div className="galleryTitle_Header">
            <h3>double room </h3>
          </div>
          <div className="galleryImages">
            <img src={doublebed1} alt="double bed" />
            <img src={doublebed2} alt="double bed" />
            <img src={doublebed3} alt="double bed" />
          </div>
        </div>
        <div className="galleryTitle">
          <div className="galleryTitle_Header">
            <h3>pool and bar</h3>
          </div>
          <div className="galleryImages">
            <img src={poolbar1} alt="pool and bar" />
            <img src={poolbar2} alt="pool and bar" />
            <img src={poolbar3} alt="pool and bar" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
