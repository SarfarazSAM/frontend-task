import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation } from "swiper";
import Featuredtags from "./Featuredtags";
import img1 from "../../assets/fearuted/addidasimg.png";
import img2 from "../../assets/fearuted/bondsimg.png";
import img3 from "../../assets/fearuted/groupimg.png";
import img4 from "../../assets/fearuted/amazonimg.png";
import img5 from "../../assets/fearuted/dellimg.png";

const Featured = () => {
  const [slidesPerView, setSlidesPerView] = useState(0);
  useEffect(() => {
    const handelResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(1.7);
      } else if (window.innerWidth <= 768) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(4);
      }
    };
    handelResize();
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  });
  return (
    <>
      <h1 className="text-gray-400 text-2xl font-semibold mx-2 sm:mx-12">
        Featured offers
      </h1>
      <div className="w-full px-2 sm:px-12">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={slidesPerView}
          // navigation
          className="swiper-container pt-4 pb-10"
        >
          <div className="bg-black mx-20">
            <SwiperSlide>
              <Featuredtags img={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <Featuredtags img={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <Featuredtags img={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <Featuredtags img={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <Featuredtags img={img5} />
            </SwiperSlide>
            <SwiperSlide>
              <Featuredtags img={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <Featuredtags img={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <Featuredtags img={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <Featuredtags img={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <Featuredtags img={img5} />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Featured;
