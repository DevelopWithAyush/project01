import React from "react";

const FaqCard = () => {
  return (
    <div className="py-[30px] w-full border-b border-solid border-[#FFF] border-opacity-20 flex flex-row items-center justify-between gap-2">
      <p className="text-[18px] text-white leading-normal tracking-[-0.588px]">
        Lorem ipsum dolor sit amet consectetur. Id etiam egestas a ipsum
        dignissim.
      </p>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M19 9.375C19 9.67337 18.8815 9.95952 18.6705 10.1705C18.4595 10.3815 18.1734 10.5 17.875 10.5H10.75V17.625C10.75 17.9234 10.6315 18.2095 10.4205 18.4205C10.2095 18.6315 9.92337 18.75 9.625 18.75C9.32663 18.75 9.04048 18.6315 8.8295 18.4205C8.61853 18.2095 8.5 17.9234 8.5 17.625V10.5H1.375C1.07663 10.5 0.790483 10.3815 0.579505 10.1705C0.368526 9.95952 0.25 9.67337 0.25 9.375C0.25 9.07663 0.368526 8.79048 0.579505 8.5795C0.790483 8.36853 1.07663 8.25 1.375 8.25H8.5V1.125C8.5 0.826631 8.61853 0.540483 8.8295 0.329505C9.04048 0.118526 9.32663 0 9.625 0C9.92337 0 10.2095 0.118526 10.4205 0.329505C10.6315 0.540483 10.75 0.826631 10.75 1.125V8.25H17.875C18.1734 8.25 18.4595 8.36853 18.6705 8.5795C18.8815 8.79048 19 9.07663 19 9.375Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default FaqCard;
