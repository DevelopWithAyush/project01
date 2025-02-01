import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div className="container relative max-w-[88rem] mx-auto py-[77px] flex flex-col items-center justify-start gap-[50px]">
      <p className="text-[54px] font-dm-sans-bold_700 leading-[60px] tracking-[-3.24px]">
        Lorem ipsum dolor sit amet
      </p>
      <div className="flex flex-col items-center justify-start w-full">
              <FaqCard/>
              <FaqCard/>
              <FaqCard/>
              <FaqCard/>
      </div>
    </div>
  );
};

export default Faq;
