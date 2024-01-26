import React from "react";
import Header from "../../../components/Header.tsx";
import CtaBottom from "../../../components/CtaBottom.tsx";
import Feature from "../../../components/Feature.tsx";
import PopularPlaces from "../../../components/PopularPlaces.tsx";
import Footer from "../../../components/Footer.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
const LandingPage: React.FC = () => {
  const sectionStyle = { marginBottom: "2rem" };

  return (
    <div>
      <Header />
      <div style={sectionStyle}>
        <Feature />
      </div>
      <div style={sectionStyle}>
        <PopularPlaces />
      </div>
      <div style={sectionStyle}>
        <CtaBottom />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
