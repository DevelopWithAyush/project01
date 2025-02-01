import React from "react";

const Section3 = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-screen  relative ">
      <div
        className="absolute top-0 left-0 w-full h-[1754px]"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, rgba(93, 44, 168, 0.85) 57.83%, #000 100%)",
        }}
      />
      <div className="relative container max-w-[88rem] mx-auto flex flex-col items-center justify-start gap-[60px]">
        <div className="flex flex-col items-center justify-start gap-5">
          <p className="text-[54px] text-[#FFF] font-dm-sans-bold_700 ">
            Lorem ipsum dolor sit
          </p>
          <p className="max-w-[700px] text-[#FFF] text-[22px] font-dm-sans-italic_400 text-center text-balance leading-[140%] ">
            Lorem ipsum dolor sit amet consectetur. Viverra scelerisque sed
            praesent viverra amet. Tristique sollicitudin libero amet
            scelerisque quam quis lacus rhoncus sit.
          </p>
        </div>
        <div
          className="w-full h-[678px] bg-black  rounded-[38px]  "
          style={{
            boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.65)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Section3;
