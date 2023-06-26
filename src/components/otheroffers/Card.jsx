const Card = ({ text }) => {
  return (
    <div className="flex h-[90px] w-[260px] rounded-3xl shadow-lg">
      <div className="flex flex-col justify-center bg-[#939dee] py-3 ps-4 pe-4 pb-2 w1/2 rounded-s-3xl w-[135px]">
        <p className="text-white font-semibold mb-1 text-sm mb-2">{text}</p>
        <p className="text-white text-xs mb-3">End in 3 days</p>
      </div>
      <div className="flex flex-col py-5 gap-2 item-center justify-center bg-white w-1/2 rounded-e-3xl w-1/2">
        <button className="bg-[#939dee] mx-4 p-2 text-white text-xs font-semibold rounded-3xl">
          SHOP OFFER
        </button>
        <div className="flex item-center justify-center gap-2">
          <p className="text-[#939dee] text-xs">more</p>
          <img
            src="src/assets/history/more.png"
            alt=""
            className="h-[5px] mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
