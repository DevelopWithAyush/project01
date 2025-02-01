import Button from "./Button";

const HeroSection = () => {
  return (
    <main
      className="pb-[400px]"
      style={{
        background:
          "linear-gradient(180deg, #000 0%, #200D42 36.21%, #4F21A1 68.68%, #A46EDB 86.54%)",
      }}
    >
      <section className="flex flex-col items-center justify-start container max-w-[88rem] mx-auto gap-8 py-[69px]  ">
        <Button />
        <p className="text-[165px] font-dm-sans-bold_700  text-white leading-[125px]">
          AI Agents
        </p>
        <p className="text-[22px] text-white font-dm-sans-regular_400 max-w-[650px] text-balance text-center">
          Lorem ipsum dolor sit amet consectetur. Tellus integer molestie cursus
          nam aliquam facilisis. Mi lectus molestie platea ullamcorper. Nunc
          vitae nulla mi suspendisse enim massa pulvinar. Interdum egestas
          nullam morbi blandit nunc.
        </p>
        <button className="text-black px-5 py-[15px] bg-white rounded-[10px]">
          Get It Now
        </button>
      </section>
      <svg
        width="2344"
        height="1014"
        viewBox="0 0 2344 1014"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-0"
      >
        <path
          d="M2343.5 507C2343.5 576.835 2310.79 643.404 2251.54 703.998C2192.29 764.593 2106.54 819.186 2000.53 865.044C1788.52 956.76 1495.59 1013.5 1172 1013.5C848.413 1013.5 555.483 956.76 343.469 865.044C237.462 819.186 151.706 764.593 92.4591 703.998C33.2146 643.404 0.5 576.835 0.5 507C0.5 437.165 33.2146 370.596 92.4591 310.002C151.706 249.407 237.462 194.814 343.469 148.956C555.483 57.2398 848.413 0.5 1172 0.5C1495.59 0.5 1788.52 57.2398 2000.53 148.956C2106.54 194.814 2192.29 249.407 2251.54 310.002C2310.79 370.596 2343.5 437.165 2343.5 507Z"
          fill="url(#paint0_radial_3_189)"
          stroke="#B48CDE"
        />
        <defs>
          <radialGradient
            id="paint0_radial_3_189"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1172 507) rotate(90) scale(521 1204.36)"
          >
            <stop offset="0.822011" />
            <stop offset="1" stop-color="#9560EB" />
          </radialGradient>
        </defs>
      </svg>
    </main>
  );
};

export default HeroSection;