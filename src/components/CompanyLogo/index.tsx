import React from "react";
import Marquee from "../ui/Marquee";
import CardSection from "./CardSection";

const CompanyLogo = () => {
  return (
      <div className="container relative flex-col flex items-center justify-start mx-auto max-w-[88rem] w-full ">
          
      <p className="text-[#7A7A7A]">
        {" "}
        Lorem ipsum dolor sit amet consectetur.{" "}
      </p>
      <div className="w-full mt-[38px]">
        <Marquee className="[--duration:40s] [--gap:1.5rem] md:[--gap:4rem]">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className="w-[146px] h-[32px] bg-gray-600 flex items-center justify-center rounded-[10px]"
              key={index}
            ></div>
          ))}
        </Marquee>
      </div>
      <div className="w-[100vw]  bg-black h-screen py-[121px]">
        <div className="container mx-auto max-w-[88rem] flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-5">
            <p className="text-[54px] font-dm-sans-bold_700 leading-[110%] tracking-[-3.24px]">
              Lorem ipsum dolor sit
            </p>
            <p className="text-[22px] font-dm-sans-italic_400 leading-[110%]  text-white max-w-[570px] text-balance text-center">
              Lorem ipsum dolor sit amet consectetur. Vel proin tortor gravida
              facilisis morbi dui mi nunc donec. Sit arcu risus facilisis
              viverra pulvinar cursus viverra.
            </p>
          </div>
              </div>
              <CardSection/>
      </div>
    </div>
  );
};

export default CompanyLogo;
