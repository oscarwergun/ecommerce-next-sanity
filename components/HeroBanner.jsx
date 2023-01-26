import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="flex h-[500px] md:h-[600px] lg:h-[650px] min-w-full mx-auto px-10  relative xl:z-20">
      <div className="bg-yellow rounded-lg w-[100%] mx-auto px-5">
        <p className="mx-1 my-3 text-2xl">{heroBanner.smallText}</p>
        <h3 className="ml-5 text-5xl font-semibold tracking-wide md:text-6xl lg:text-8xl ">
          {heroBanner.medText}
        </h3>
        <h1 className="text-white uppercase text-4xl md:text-5xl lg:text-7xl xl:text-8xl ml-[-10px] z-10 font-semibold">
          {heroBanner.largeText1}
        </h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="jackets"
          className="absolute top-[12%] right-[15%] w-[250px] 
        md:right-[20%] md:w-[300px] md:top-[10%] 
        lg:right-[15%] lg:w-[360px]
        xl:right-[15%] xl:w-[400px] xl:top-[6%] xl:z-0"
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button
              type="button"
              className="bg-[#030108] rounded-md px-10  py-4 text-[#fafafa] uppercase border-none mt-10 font-bold tracking-wider cursor-pointer z-20 ml-5 hover:opacity-70 md:px-12 lg:px-36 md:py-6 
              lg:py-8 lg:text-2xl
              
              "
            >
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className="flex absolute flex-col right-[5%] bottom-[5%] w-[360px] tracking-wide font-semibold text-lg md:text-xl lg:text-2xl">
            <h5 className="font-bold text-white uppercase right-40 lg:text-2xl ">Description</h5>
            <p className="text-[#5f5f5f] text-xl">{heroBanner.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
