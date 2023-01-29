import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
const FooterBanner = ({
  footerBanner: { discount, largeText2, saleTime, description, image, product },
}) => {
  return (
    <div>
      <div className="bg-black h-[400px] flex justify-center px-10 py-5 rounded-[15px] relative  mt-10 mx-[40px]">
        <div className="py-3">
          <p className="pt-10 mb-2 text-3xl font-semibold tracking-wider text-white">
            {discount}
          </p>
          <h3 className="mb-2 ml-10 text-5xl font-semibold tracking-wider text-white">
            {largeText2}
          </h3>
          <p className="text-lg text-white">{saleTime}</p>
          <div className="my-4 animate-pulse">
            <Link href={`/product/${product}`}>
              <button
                type="button"
                className="px-4 py-3 text-xl font-semibold text-white border rounded-lg cursor-pointer bg-red"
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <div className="relative text-white font-semibold tracking-wider text-[16px] z-20">
          <p className="font-bold text-black uppercase">{description}</p>

          <img
            src={urlFor(image).url()}
            alt=""
            className="absolute w-[250px] z-30 top-0 left-0  
              md:w-[100px]
              lg:w-[200px]
              xl:w-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
