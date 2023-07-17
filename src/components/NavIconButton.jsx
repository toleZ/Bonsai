const NavIconButton = ({ isHidden, handleHidde }) => {
  return (
    <button onClick={handleHidde} className="relative p-3">
      <span
        className={`absolute left-1/2 -translate-x-1/2 w-full h-[3px] bg-bonsai-#4c4d5f rounded-lg ${
          isHidden ? "-translate-y-[300%]" : "-translate-y-[50%] rotate-45"
        } transition-all duration-300`}
      />
      <span
        className={`absolute left-1/2 -translate-x-1/2 w-full h-[3px] bg-bonsai-#4c4d5f rounded-lg ${
          isHidden ? "-translate-y-[50%]" : "opacity-0"
        } transition-all duration-300 delay-[50ms]`}
      />
      <span
        className={`absolute left-1/2 -translate-x-1/2 w-full h-[3px] bg-bonsai-#4c4d5f rounded-lg ${
          isHidden ? "translate-y-[200%]" : "-translate-y-[50%] -rotate-45"
        } transition-all duration-300`}
      />
    </button>
  );
};

export default NavIconButton;
