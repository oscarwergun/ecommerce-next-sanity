import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  // take the state cartItems from the useContext
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <div className="flex items-center justify-between mx-auto px-6 h-[100px] bg-[#04020a] relative">
      <p className="text-3xl my-2 tracking-wider font-semibold font-serif italic text-[#fafafa]">
        <Link href="http://codeguruozzy.com">
          <div>
            <span className="text-4xl text-red">M</span>averick       
            <span className="ml-2 text-4xl text-red">M</span>all
          </div>
        </Link>
      </p>

      <button
        type="button"
        className="relative flex items-center justify-between"
        onClick={() => setShowCart(!showCart)}
      >
        <AiOutlineShopping size="30" color="white" />
        <span className="text-1xl absolute left-5 bottom-2 text-[#eee] bg-[#f73030] w-[24px] h-[24px] rounded-full">
          {totalQuantity}
        </span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
