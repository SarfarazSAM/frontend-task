import img from "../../../assets/history/shophouse.png";

const Div2 = ({ text }) => {
  return (
    <div className="flex gap-10 justify-between mb-4">
      <div className="flex gap-6">
        <img src={img} alt="icon" className="p-3 bg-gray-100 rounded-xl" />
        <div className="flex flex-col justify-center text-xs">
          <p className="font-bold text-gray-500">{text}</p>
          <p className="font-semibold text-gray-300">9th April $287</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center px-6 text-xs">
        <p className="text-right font-bold text-[#a9b1f4]">+37.5$</p>
        <p className="font-semibold text-[#a9b1f4]">+oodlz 5.18</p>
      </div>
    </div>
  );
};

export default Div2;
