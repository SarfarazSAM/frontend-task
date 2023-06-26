import img1 from "../../assets/fearuted/adidas.png";

const Featuredtags = ({ img }) => {
  return (
    <div className="bg-white rounded-3xl w-[150px] h-[150px] shadow-lg text-xs">
      <img src={img} alt="img" className="w-[150px]" />
      <div className="absolute top-0 left-0">
        <img src={img1} alt="icon" className="w-[150px]" />
      </div>
      <div className="flex flex-col item-center justify-center font-semibold text-gray-400">
        <p className="mt-4 ml-1 mb-1 text-center">
          Up to <b className="p-1 rounded-lg bg-gray-100 text-sky-300">8%</b>{" "}
          cashback!
        </p>
        <p className="pl-5">was 4%</p>
      </div>
    </div>
  );
};

export default Featuredtags;
{
  /* <div class="relative">
  <img src="path/to/image.jpg" alt="Image" class="w-full h-auto">
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <img src="path/to/icon.png" alt="Icon" class="w-12 h-12">
  </div>
</div> */
}
