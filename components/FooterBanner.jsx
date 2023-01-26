import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
const FooterBanner = ({
  footerBanner: {
    discount,
    largeText2,
    saleTime,
    smallText,
    medText,
    description,
    image
  },
}) => {
  return (
    <div>
      <div className="bg-yellow h-[400px] m-5  flex justify-center px-10 py-5 rounded-[15px] relative w-[90%] mt-10 mx-auto">
        <div className="py-3">
          <p className="pt-10 mb-2 text-3xl font-semibold tracking-wider text-white">
            {discount}
          </p>
          <h3 className="mb-2 ml-10 text-5xl font-semibold tracking-wider text-white">
            {largeText2}
          </h3>
          <p className="text-lg text-white">{saleTime}</p>
        </div>
        <div className="relative text-white font-semibold tracking-wider text-[16px] z-20">
          <p>{smallText}</p>
          <h3>{medText}</h3>
          <p className="font-bold text-black uppercase">{description}</p>
          <Link href="">
            <button type="button" className="cursor-pointer ">
              <img src={urlFor(image).url()} alt="" className="absolute left-[500px] bottom-[50px] w-[200px] z-0 
              md:w-[100px]
              lg:w-[200px]
              xl:w-[250px]"/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
