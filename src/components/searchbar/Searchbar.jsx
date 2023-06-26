import img1 from "../../assets/flameicon.png";

const Searchbar = () => {
  return (
    <div className="flex py-8 sm:py-12 lg:py-16 px-8 sm:px-12 justify-between">
      <div className="relative flex items-center h-12 rounded-xl focus-within:shadow-lg bg-white w-8/12 sm:w-4/12">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          className="w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search online stores"
        />
      </div>
      <div className="flex item-center">
        <img src={img1} alt="icon" className="h-[24px] w-[24px] mt-3" />
      </div>
    </div>
  );
};
{
  /* <div>
      <div className="max-w-md mx-auto">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>

      <img src="src/assets/flameicon.png" alt="" />
    </div> 
    
    <div className="flex items-center justify-between p-20">
      <input
        type="text"
        placeholder="Search online stores"
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute text-gray-400 ml-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
          clipRule="evenodd"
        />
      </svg>
      <div className="bg-white-100 p-2">
        <img src="src/assets/flameicon.png" alt="" />
      </div>
    </div>
    */
}
export default Searchbar;
