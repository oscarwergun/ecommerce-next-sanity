import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="flex h-[600px] max-w-[2000px] mx-auto px-10 py-20 relative">
      <div className="bg-[#edebeb] rounded-lg w-[90%] mx-auto px-5">
        <p className="small-text">{heroBanner.smallText}</p>
        <h3 className="text-[40px] tracking-wide font-semibold ml-5 ">
          {heroBanner.medText}
        </h3>
        <h1 className="text-white uppercase text-4xl md:text-5xl lg:text-6xl xl:text-8xl ml-[-10px]">
          {heroBanner.largeText1}
        </h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="earphones"
          className="absolute top-[20%] right-[10%] w-[300px]
        md:right-[10%] md:w-[360px] md:top-[15%] 
        lg:right-[15%] lg:w-[400px]
        xl:right-[20%] xl:w-[500px] xl:top-[10%]"
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button
              type="button"
              className="bg-[#f02d34] rounded-md px-10  py-3 text-[#fafafa] uppercase border-none mt-10 font-bold tracking-wider cursor-pointer z-20 ml-5 hover:opacity-70 md:px-16 lg:px-20 md:py-6 lg:py-6"
            >
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className="flex absolute flex-col right-[10%] bottom-[20%] w-[300px] tracking-wide">
            <h5 className="right-40 font-semibold">Description</h5>
            <p className="text-[#5f5f5f]">{heroBanner.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
