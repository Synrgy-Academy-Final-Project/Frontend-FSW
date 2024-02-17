import React from "react";
import Navbar from "./Navbar";
import "./AboutUsHeader.css";

const AboutUsHeader: React.FC = () => {
  return (
    <>
      <div className="bg-aboutus">
        <Navbar />
        <div className="tagline d-flex justify-content-center">
          <h1>Selamat Datang di Fly.id</h1>
          <p>Let’s Your Dreams Take Flight!</p>
        </div>
        {/* <img className="polygon" src="./images/polygon-1.png" alt="polygon" /> */}
      </div>
    </>
  );
};
export default AboutUsHeader;
