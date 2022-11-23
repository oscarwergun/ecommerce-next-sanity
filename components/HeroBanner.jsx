import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="flex h-[500px] md:h-[600px] min-w-full mx-auto px-10 py-20 relative xl:z-20">
      <div className="bg-[#edebeb] rounded-lg w-[90%] mx-auto px-5">
        <p className="small-text">{heroBanner.smallText}</p>
        <h3 className="text-[40px] tracking-wide font-semibold ml-5 ">
          {heroBanner.medText}
        </h3>
        <h1 className="text-white uppercase text-4xl md:text-5xl lg:text-7xl xl:text-8xl ml-[-10px] z-10 font-semibold">
          {heroBanner.largeText1}
        </h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="earphones"
          className="absolute top-[18%] right-[15%] w-[220px] 
        md:right-[20%] md:w-[280px] md:top-[15%] 
        lg:right-[15%] lg:w-[320px]
        xl:right-[15%] xl:w-[360px] xl:top-[12%] xl:z-0"
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button
              type="button"
              className="bg-[#6427e8] rounded-md px-10  py-3 text-[#fafafa] uppercase border-none mt-10 font-bold tracking-wider cursor-pointer z-20 ml-5 hover:opacity-70 md:px-16 lg:px-20 md:py-6 lg:py-6"
            >
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className="flex absolute flex-col right-[5%] bottom-[15%] w-[360px] tracking-wide font-semibold text-lg md:text-xl lg:text-2xl">
            <h5 className="right-40 font-bold text-white uppercase
            lg:text-2xl ">Description</h5>
            <p className="text-[#5f5f5f] text-xl">{heroBanner.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
