const NavbarLG = () => {
  return (
    <nav className="hidden lg:flex w-full items-center justify-evenly py-4 px-12 bg-white">
      <img src="/Images/logo.svg" alt="Bonsai logo" className="w-36" />

      <ul className="flex items-center gap-8">
        <li className="font-proxima  text-bonsai-#4c4d5f">Product</li>
        <li className="font-proxima  text-bonsai-#4c4d5f">Templates</li>
        <li className="font-proxima  text-bonsai-#4c4d5f">Pricing</li>
        <li className="font-proxima  text-bonsai-#4c4d5f">Reviews</li>
      </ul>

      <span className="flex items-center gap-3">
        <button className="py-2 px-6 border border-bonsai-#00b289 rounded-md text-bonsai-#00b289 text-sm font-proxima font-bold hover:bg-bonsai-#00b289 hover:text-bonsai-#fff">
          LOG IN
        </button>
        <button className="py-2 px-6 rounded-md bg-bonsai-#00b289 text-bonsai-#fff text-sm font-proxima font-bold">
          START FREE
        </button>
      </span>
    </nav>
  );
};

export default NavbarLG;
