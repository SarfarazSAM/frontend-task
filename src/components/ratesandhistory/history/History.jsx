import { Disclosure } from "@headlessui/react";
import Div2 from "./Div2";
import Div1 from "./div1";
import img1 from "../../../assets/history/more.png";

const History = () => {
  return (
    <div className="mb-10">
      <h1 className="text-gray-400 text-2xl font-semibold mb-4">History</h1>
      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <Div1 />
        <div className="border-t border-gray-300 my-4"></div>
        <Div2 text="Adidas" />
        <Div2 text="Bonds" />
        <Disclosure>
          <Disclosure.Button className=" w-full py-2 flex justify-center">
            <img src={img1} alt="" />
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <Div2 text="dell" />
            <Div2 text="amazon" />
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  );
};

export default History;
