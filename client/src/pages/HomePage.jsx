import React, { useEffect } from "react";
import HomePageHeroSection from "../components/Home/Hero";
import HomePageAboutSection from "../components/Home/About";
import HomePageStepsSections from "../components/Home/Steps";
import HomePageCollectionSection from "../components/Home/Collection";

const HomePage = ({ theme }) => {

  return (
    <div className="h-full w-full overflow-hidden">
      <HomePageHeroSection theme={theme} />
      <HomePageAboutSection theme={theme} />
      <HomePageStepsSections theme={theme} />
      <HomePageCollectionSection theme={theme} />
    </div>
  );
};

export default HomePage;
