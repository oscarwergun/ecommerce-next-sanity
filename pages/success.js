import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);

    return () => {};
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-[80vh]">
      <div
        id="wrapper"
        className="bg-black w-[600px] h-[600px] flex items-center justify-center rounded-3xl flex-col"
      >
        <p className="text-[100px] py-4">
          <BsBagCheckFill color="yellow" />
        </p>
        <p className="text-3xl font-bold text-white">
          Thank you for your order!
        </p>
        <p className="py-3 text-slate-300">
          If you have any questions, please feel free to contact
        </p>
        <a
          href="mailto:oscar.w.ergun@gmail.com"
          className="text-xl text-red opacity-80"
        >
          oscar.w.ergun@gmail.com
        </a>
        <Link href="/">
          <button
            className="p-4 my-3 text-lg text-white ease-in-out rounded-md shadow-lg cursor-pointer transition-scale bg-red hover:scale-105"
            type="button"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
