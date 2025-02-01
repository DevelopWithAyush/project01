import React from "react";

const CallToAction = () => {
  return (
    <div className=" container mx-auto max-w-[88rem] relative flex flex-col items-center justify-start py-[132px] ">
      <p className="text-white text-[54px] font-dm-sans-bold_700 leading-[110%] ">
        Lorem ipsum dolor sit
      </p>
      <p className="text-white text-[16px] font-dm-sans-regular_400 leading-[110%] tracking-[-0.16px] max-w-[447px] text-center text-balance mt-5 ">
        Lorem ipsum dolor sit amet consectetur. Risus faucibus velit ipsum
        lectus sed tincidunt pellentesque est. Morbi nisi.
      </p>
      <div className="flex flex-row items-center justify-center gap-[10px] mt-10">
        <input
          type="text"
          placeholder="Enter your email address"
          className="text-[16px] font-dm-sans-medium_500 text-[#FFF] py-[9px] px-[12px] rounded-[10px] text-opacity-50 w-[286px] bg-[#FFF] bg-opacity-20 "
        />
        <button className="bg-[#FFF] text-black px-[15px] py-[10px] rounded-[10px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
