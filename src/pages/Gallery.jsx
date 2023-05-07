import React from "react";
import "../styles/gallery.css";
import ImageHolder from "../components/ImageHolder";
import outsideView from "../assets/outside.jpg";

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
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
          </div>
        </div>
        <div className="galleryTitle">
          <div className="galleryTitle_Header">
            <h3>dining hotel jubilant</h3>
          </div>
          <div className="galleryImages">
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
          </div>
        </div>
        <div className="galleryTitle">
          <div className="galleryTitle_Header">
            <h3>single room</h3>
          </div>
          <div className="galleryImages">
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
          </div>
        </div>
        <div className="galleryTitle">
          <div className="galleryTitle_Header">
            <h3>double room </h3>
          </div>
          <div className="galleryImages">
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
          </div>
        </div>
        <div className="galleryTitle">
          <div className="galleryTitle_Header">
            <h3>pool and bar</h3>
          </div>
          <div className="galleryImages">
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
          </div>
        </div>
        <div className="galleryTitle">
          <div className="galleryTitle_Header">
            <h3>reception</h3>
          </div>
          <div className="galleryImages">
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
            <img src={outsideView} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
