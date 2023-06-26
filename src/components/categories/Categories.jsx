import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Tags from "./Tags";
import img1 from "../../assets/categories/travelicon.png";
import img2 from "../../assets/categories/shoeicon.png";
import img3 from "../../assets/categories/shopicon.png";
import img4 from "../../assets/categories/eaticon.png";
import img5 from "../../assets/categories/categoriesicon.png";

{
  /* <div className="flex justify-between text-white text-xs">
        <Tags
          icon="src/assets/categories/travelicon.png"
          text="travel"
          css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-cyan-200 to-sky-400 pb-1 shadow-lg"
        />
        <Tags
          icon="src/assets/categories/shoeicon.png"
          text="alcohol"
          css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-purple-300 to-purple-500 pb-1 shadow-lg"
        />
        <Tags
          icon="src/assets/categories/shopicon.png"
          text="market"
          css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-pink-300 to-purple-400 pb-1 shadow-lg"
        />
        <Tags
          icon="src/assets/categories/eaticon.png"
          text="fashion"
          css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-orange-300 to-pink-400 pb-1 shadow-lg"
        />
        <Tags
          icon="src/assets/categories/travelicon.png"
          text="technology"
          css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-orange-400 to-pink-300 pb-1 shadow-lg"
        />
        <Tags
          icon="src/assets/categories/shoeicon.png"
          text="food"
          css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-sky-200 to-sky-400 pb-1 shadow-lg"
        />
        <Tags
          icon="src/assets/categories/shopicon.png"
          text="fitness"
          css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-purple-300 to-purple-500 pb-1 shadow-lg"
        />
        <Tags
          icon="src/assets/categories/eaticon.png"
          text="baby"
          css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-pink-300 to-purple-400 pb-1 shadow-lg"
        />
        <Tags
          icon="src/assets/categories/categoriesicon.png"
          text="categories"
          css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-white text-gray-300 pb-1 shadow-lg"
        />
      </div> */
}

const Categories = () => {
  const [slidesPerView, setSlidesPerView] = useState(0);

  useEffect(() => {
    // Update the slidesPerView value based on the window width
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(3);
      } else if (window.innerWidth <= 768) {
        setSlidesPerView(5);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(9);
      } else {
        setSlidesPerView(6);
      }
    };

    // Call the handleResize function on initial load and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mx-4 sm:mx-12 my-10">
      <h2 className="text-gray-400 text-2xl font-semibold mb-4">Categories</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={slidesPerView}
        className="text-white"
      >
        <SwiperSlide>
          <Tags
            icon={img1}
            text="travel"
            css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-cyan-200 to-sky-400 pb-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tags
            icon={img2}
            text="alcohol"
            css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-purple-300 to-purple-500 pb-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tags
            icon={img3}
            text="market"
            css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-pink-300 to-purple-400 pb-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tags
            icon={img4}
            text="fashion"
            css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-orange-300 to-pink-400 pb-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tags
            icon={img1}
            text="travel"
            css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-cyan-200 to-sky-400 pb-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tags
            icon={img2}
            text="alcohol"
            css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-purple-300 to-purple-500 pb-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tags
            icon={img3}
            text="market"
            css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-pink-300 to-purple-400 pb-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tags
            icon={img4}
            text="fashion"
            css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-gradient-to-bl from-orange-300 to-pink-400 pb-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Tags
            icon={img5}
            text="categories"
            css="w-[80px] h-[65px] flex flex-col items-center justify-center rounded-xl px-5 bg-white text-gray-300 pb-1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
