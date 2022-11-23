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
      <div className="bg-[#6427e8] h-[400px] m-5  flex justify-center px-10 py-5 rounded-[15px] relative w-[90%] mt-10 mx-auto">
        <div className="py-3">
          <p className="text-white font-semibold text-3xl tracking-wider pt-10 mb-2">
            {discount}
          </p>
          <h3 className="text-white text-5xl ml-10 tracking-wider font-semibold mb-2">
            {largeText2}
          </h3>
          <p className="text-white text-lg">{saleTime}</p>
        </div>
        <div className="relative text-white font-semibold tracking-wider text-[16px] z-20">
          <p>{smallText}</p>
          <h3>{medText}</h3>
          <p className="uppercase font-bold text-black">{description}</p>
          <Link href="">
            <button type="button" className="cursor-pointer ">
              <img src={urlFor(image).url()} alt="" className="absolute bottom-[10%] left-[15%] top-[25%] w-[250px] z-0 
              md:w-[100px]
              lg:w-[200px]
              xl:w-[300px]"/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
