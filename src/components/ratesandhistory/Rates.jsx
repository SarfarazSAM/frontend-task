import { Tab } from "@headlessui/react";

const Rates = () => {
  return (
    <div className="">
      <h1 className="text-gray-400 text-2xl font-semibold mb-4">Store rates</h1>
      <div className="bg-white p-4 rounded-3xl shadow-lg">
        <Tab.Group defaultIndex={1}>
          <Tab.List className="bg-gray-100 rounded-3xl">
            <Tab className="ui-selected:bg-[#a9b1f4] ui-selected:text-white ui-not-selected:bg-gray-100 ui-not-selected:text-gray-400 px-8 lg:px-9 xl:px-12 py-2 rounded-3xl focus:outline-none">
              Terms
            </Tab>
            <Tab className="ui-selected:bg-[#a9b1f4] ui-selected:text-white ui-not-selected:bg-gray-100 ui-not-selected:text-gray-400 px-8 lg:px-9 xl:px-12 py-2 rounded-3xl focus:outline-none">
              Rates
            </Tab>
            <Tab className="ui-selected:bg-[#a9b1f4] ui-selected:text-white ui-not-selected:bg-gray-100 ui-not-selected:text-gray-400 px-8 lg:px-9 xl:px-12 py-2 rounded-3xl focus:outline-none">
              Tips
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="flex gap-12 p-5 justify-center">
              <div className="text-gray-500 font-semibold">
                <p>1.</p>
                <p>2.</p>
                <p>3.</p>
                <p>4.</p>
              </div>
              <div className="text-gray-400">
                <p>on kid shoes</p>
                <p>on women shoes</p>
                <p>on men shoes</p>
                <p>on clothes</p>
              </div>
            </Tab.Panel>
            <Tab.Panel className="flex gap-12 p-5 justify-center">
              <div className="text-gray-500 font-semibold">
                <p>5.15%</p>
                <p>4.2%</p>
                <p>3%</p>
                <p>2.5%</p>
              </div>
              <div className="text-gray-400">
                <p>on kid shoes</p>
                <p>on women shoes</p>
                <p>on men shoes</p>
                <p>on clothes</p>
              </div>
            </Tab.Panel>
            <Tab.Panel className="flex gap-12 p-5 justify-center">
              <div className="text-gray-500 font-semibold">
                <p>1.</p>
                <p>2.</p>
                <p>3.</p>
                <p>4.</p>
              </div>
              <div className="text-gray-400">
                <p>on kid shoes</p>
                <p>on women shoes</p>
                <p>on men shoes</p>
                <p>on clothes</p>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Rates;
