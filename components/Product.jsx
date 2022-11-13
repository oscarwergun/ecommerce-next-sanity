import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      {/* {console.log(slug && slug.current)} */}
      <Link href={`/product/${slug?.current}`}>
        <div>
          {/* {console.log(image[0].asset._ref)} */}
          {image && (
            <img
              src={urlFor(image[0].asset._ref).url()}
              alt="product image"
              width={250}
              height={250}
              className="border-4 bg-[#ebebeb] hover:scale-75 duration-300 ease-in-out p-3 rounded-3xl"
            />
          )}
          <div className="flex justify-center items-center">

          <p className="my-2 text-xl text-slate-600 tracking-wide font-semibold mx-2">{name}</p>
          <span className="text-slate-400 mx-2 text-lg ">{price} SEK</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
