import React from "react";

const Header = () => {
  return (
    <header className="container max-w-[88rem] w-full mx-auto flex  flex-row p-5 items-center justify-between">
      <div className="w-[44px] h-[44px] aspect-square bg-white rounded-xl"></div>
      <button
        className="
 text-[14px] capitalize text-black bg-white font-dm-sans-regular_400 leading-normal px-[15px] py-[10px] rounded-[10px]"
      >
        Get it now
      </button>
      
    </header>
  );
};

export default Header;
