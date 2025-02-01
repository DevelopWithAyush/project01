import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'


const Button = () => {
  return (
      <div className="py-[10px] px-[13px] flex flex-row items-center justify-center text-[13px] gap-3 border border-[#222] border-solid rounded-[10px] ">
          {" "}
          <p
              className="flex flex-col items-center justify-center "
              style={{
                  color: "rgba(255, 255, 255, 0.50)",
              }}
          >
              {" "}
              New Updates Here{" "}
          </p>{" "}
          <button className="flex flex-row items-center justify-start gap-1 ">
              Read more <FaArrowRightLong />
          </button>
      </div>
  )
}

export default Button