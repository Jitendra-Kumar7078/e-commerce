import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_Kurta } from "../../../Data/mens_kurta";


const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-20 py-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_Kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_Kurta} sectionName={"Mens Shoes"}/>
        <HomeSectionCarousel data={mens_Kurta} sectionName={"Mens T'shirt"}/>
        <HomeSectionCarousel data={mens_Kurta} sectionName={"Mens Watches"}/>
        <HomeSectionCarousel data={mens_Kurta} sectionName={"Womens Saree"}/>
        <HomeSectionCarousel data={mens_Kurta} sectionName={"Womens Shoes"}/>
        
      </div>
    </div>
  );
};

export default HomePage;
