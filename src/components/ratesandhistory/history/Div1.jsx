import img from "../../../assets/history/shophouse.png";

const Div1 = () => {
  return (
    <div className="flex gap-10 justify-between">
      <div className="flex gap-6">
        <img src={img} alt="icon" className="p-3 bg-gray-100 rounded-xl" />
        <div className="flex flex-col justify-center text-xs">
          <p className="font-bold text-gray-500">Orders</p>
          <p className="font-semibold text-gray-300">Purchases</p>
        </div>
      </div>
      <div className="flex item-center">
        <p className="pt-3 px-6 font-semibold text-[#a9b1f4]">Feb</p>
      </div>
    </div>
  );
};

export default Div1;
