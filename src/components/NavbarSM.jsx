import { useState } from "react";
import NavIconButton from "./NavIconButton";

const NavbarSM = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleHidde = () => setIsHidden(!isHidden);

  return (
    <nav className="fixed lg:hidden w-full flex items-center justify-between py-4 px-12">
      <img src="/Images/logo.svg" alt="Bonsai logo" className="w-36" />
      <button onClick={handleHidde} className="z-10">
        <NavIconButton isHidden={isHidden} handleHidde={handleHidde} />
      </button>

      <div
        className={`absolute top-0 right-0 w-screen h-screen py-4 px-16 bg-bonsai-#fff ${
          isHidden ? "translate-x-full" : "translate-x-0"
        } transition-all duration-300`}
      >
        <img src="/Images/sm-logo.svg" alt="Bonsai logo" className="w-10" />

        <ul className="mt-16 text-bonsai-#4c4d5f text-[17px] font-proxima">
          <li className="mt-3 pb-4 border-b">Product</li>
          <li className="mt-3 pb-4 border-b">Templates</li>
          <li className="mt-3 pb-4 border-b">Pricing</li>
          <li className="mt-3 pb-4 border-b">Reviews</li>
        </ul>

        <span className="flex flex-col gap-3 mt-6">
          <button className="py-2 border border-bonsai-#00b289 rounded-md text-bonsai-#00b289 text-sm font-proxima font-bold hover:bg-bonsai-#00b289 hover:text-bonsai-#fff">
            LOG IN
          </button>
          <button className="py-2 rounded-md bg-bonsai-#00b289 text-bonsai-#fff text-sm font-proxima font-bold">
            START FREE
          </button>
        </span>
      </div>
    </nav>
  );
};

export default NavbarSM;
