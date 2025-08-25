import React from "react";
import ServicesPageHeroSection from "../components/Service/Hero";
import ServicesPageCardsSection from "../components/Service/Cards";
import ServicesPageBannerSection from "../components/Service/Banner";
import ServicesPageTextsSection from "../components/Service/Texts";

const ServicesPage = ({ theme }) => {
  return (
    <>
      <ServicesPageHeroSection theme={theme} />
      <ServicesPageCardsSection theme={theme} />
      <ServicesPageBannerSection theme={theme} />
      <ServicesPageTextsSection theme={theme} />
    </>
  );
};

export default ServicesPage;
