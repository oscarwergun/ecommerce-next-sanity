import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-auto px-6 h-[100px] bg-[#6427e8] relative">
      <p className="text-3xl my-2 tracking-wider font-semibold font-serif italic text-[#fafafa]">
        <Link href="http://codeguruozzy.com" >CodeguruOzzy</Link>
      </p>
      <button type="button" className="flex items-center justify-between relative">
        <AiOutlineShopping size="30" color="white"/>
        <span className="text-1xl absolute left-5 bottom-2 text-[#eee] bg-[#f73030] w-[24px] h-[24px] rounded-full">1</span>
      </button>
    </div>
  );
};

export default Navbar;

