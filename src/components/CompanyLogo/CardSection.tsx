import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="flex container mx-auto max-w-[88rem] relative flex-row items-center justify-between w-full  mt-[66px] gap-4">
     <Card/>
     <Card/>
     <Card/>
    </div>
  );
};

export default CardSection;
