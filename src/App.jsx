import Categories from "./components/categories/Categories";
import Featured from "./components/featured/Featured";
import Slider from "./components/mainslider/Slider";
import Otheroffers from "./components/otheroffers/Otheroffers";
import Ratesandhistory from "./components/ratesandhistory/Ratesandhistory";
import Searchbar from "./components/searchbar/Searchbar";
import SideNav from "./components/sidenavbar/SideNav";

function App() {
  return (
    <div className="flex bg-gray-100 bg-[url('./assets/BG.png')] bg-contain bg-no-repeat">
      <SideNav />
      <div className="flex flex-col w-full lg:w-10/12">
        <Searchbar />
        <Slider />
        <Categories />
        <Featured />
        <Ratesandhistory />
        <Otheroffers />
      </div>
    </div>
  );
}

export default App;
