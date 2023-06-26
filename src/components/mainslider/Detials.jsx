import img1 from "../../assets/slider/shopping.png";
// import img2 from "../../assets/slider/adidas.png";

const Detials = (props) => {
  return (
    <div className="flex items-center justify-center h-[150px] sm:h-[200px] md:h-[250px]">
      <div className="flex bg-white rounded-3xl h-[150px] sm:h-[200px] md:h-[250px]">
        <div className="px-6 sm:px-10 py-4 sm:py-8 md:py-14 ">
          <h3 className="heading text-sky-500 text-md sm:text-xl">
            {props.text} cashback
          </h3>
          <div className="my-3 font-semibold text-gray-300 text-xs sm:text-base">
            <p>Shop for the latest shoes</p>
            <p>for all your sports fun.</p>
          </div>
          <button className="bg-gradient-to-r from-cyan-300 to-sky-500 p-2 px-5 rounded-3xl text-white mt-2 text-xs sm:text-base">
            SHOP NOW
          </button>
        </div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={img2} alt="" />
        </div> */}
        <img
          src={img1}
          alt="shopping"
          className="shopImg h-[150px] sm:h-[200px] md:h-[250px] w-[160px] sm:w-[280px] md:w-[350px] lg:w-[400px] rounded-e-3xl"
        />
      </div>
    </div>
  );
};

export default Detials;
