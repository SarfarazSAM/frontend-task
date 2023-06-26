import { useState, useEffect } from "react";
import img1 from "../../assets/sidenavbar/enacton.png";
import img2 from "../../assets/sidenavbar/cart.png";
import img3 from "../../assets/sidenavbar/wallet.png";
import img4 from "../../assets/sidenavbar/more.png";
const SideNav = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isNavVisible) {
    return null;
  }
  return (
    <div className="w-2/12 bg-white">
      <div className="fixed top-0 left-0 h-screen bg-white text-gray-500 font-semibold">
        <div className="flex items-center justify-center">
          <img src={img1} alt="enacton" className="py-20 px-4 w-[200px]" />
        </div>
        <div className="p-10">
          <div className="flex gap-5 justify-center mb-4">
            <img src={img2} alt="icon" />
            <p className="text-sky-500">Shop</p>
          </div>
          <div className="flex gap-5 justify-center mb-4">
            <img src={img3} alt="icon" />
            <p>Wallet</p>
          </div>
          <div className="flex gap-5 justify-center">
            <img src={img4} alt="icon" />
            <p>More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
