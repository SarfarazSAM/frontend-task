import History from "./history/History";
import Rates from "./Rates";

const Ratesandhistory = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 mx-auto">
      <Rates />
      <History />
    </div>
  );
};

export default Ratesandhistory;
