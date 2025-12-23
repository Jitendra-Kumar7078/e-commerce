import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "../../../Data/MainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item, index) => (
    <img
      key={index}
      src={item.image}
      alt="banner"
      className="cursor-pointer"
      role="presentation"
    />
  ));

  return (
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite        
      />
  );
};

export default MainCarousel;
