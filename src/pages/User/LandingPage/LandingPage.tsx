import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Promo from "../../../components/Promo";
import PopularPlaces from "../../../components/PopularPlaces";
import AboutUs from "../../../components/AboutUs";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Promo />
      <PopularPlaces />
      <AboutUs />
      <Footer />
    </>
  );
}
