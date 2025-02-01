import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <div className=" container mx-auto max-w-[88rem] relative flex items-center  flex-row w-full justify-center py-[132px] gap-12 ">
      <Image
        src={"/Images/circular.png"}
        alt="cursor"
        width={200}
        height={200}
        className="relative -translate-y-[40%] "
      />

      <div className=" flex flex-col items-center justify-start">
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
      <Image
        src={"/Images/gear.png"}
        alt="cursor"
        width={200}
        height={200}
        className="relative translate-y-[30%]"
      />
    </div>
  );
};

export default CallToAction;
