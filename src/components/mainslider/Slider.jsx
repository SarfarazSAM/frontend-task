import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation } from "swiper";

import { useState, useEffect } from "react";
import Detials from "./detials";

const Slider = () => {
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth > 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={showNavigation}
        className=""
      >
        <SwiperSlide>
          <Detials text="12%" />
        </SwiperSlide>
        <SwiperSlide>
          <Detials text="15%" />
        </SwiperSlide>
        <SwiperSlide>
          <Detials text="18%" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
