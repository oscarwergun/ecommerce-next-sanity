import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
  AiOutlineLeft,
  AiOutlineShopping,
  AiFillDelete,
} from "react-icons/ai";

import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";
const Cart = () => {
  // define useRef
  const cartRef = useRef();

  // get the value
  const {
    setShowCart,
    totalPrice,
    totalQuantity,
    cartItems,
    toggleCartItemQuantity,
    handleRemove,
  } = useStateContext();

  // define to function to handle payment with stripe
  const handleCheckout = async () => {
    //CREATE AN INSTANCE OF THE STRIPE promise
    const stripe = await getStripe();

    //make an api call to next.js backend

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify(cartItems),
    });
    // check the status
    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading("Redirecting...");
    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div className="fixed top-0 right-0 z-50 w-[100vw]" ref={cartRef}>
      <div className="h-[100vh] w-[600px] relative bg-white float-right px-4 py-8">
        <button
          className="flex items-center gap-3 ml-3 text-xl font-semibold bg-transparent border-none cursor-pointer"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span> Your cart has </span>
          <span className="text-red">
            {totalQuantity} {totalQuantity === 1 ? "item" : "(items)"}
          </span>
        </button>
        {cartItems.length < 1 && (
          <div className="flex flex-col items-center justify-center mt-10">
            <AiOutlineShopping size={180} />
            <h2 className="mt-4 text-2xl font-xl">You have no product yet</h2>
            <Link href="/">
              <button
                className="p-5 mt-10 text-xl text-white bg-red rounded-2xl "
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="mt-5 max-h-[70vh] px-5 py-4 overflow-auto">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <section key={item?._id} className="flex gap-6 p-5" id="cart-top">
                <img
                  src={urlFor(item?.image[0])}
                  alt="cart-image"
                  className="w-40 shadow-xl rounded-xl"
                />
                <div className="w-[200px] ml-12 mt-8">
                  <div className="flex flex-wrap items-center gap-6">
                    <h5 className="text-[18px] font-semibold uppercase">
                      {item?.name}
                    </h5>
                    <h4 className="font-semibold">{item?.price} kr</h4>
                  </div>
                  <div className="flex items-center">
                    <div id="quantity">
                      <p className="flex items-center gap-2 my-3 ">
                        <span
                          id="minus"
                          className="cursor-pointer"
                          onClick={() =>
                            toggleCartItemQuantity(item?._id, "decrement")
                          }
                        >
                          <AiOutlineMinusSquare size="2.5rem" />
                        </span>
                        <span id="quantity" className="text-[24px] font-bold">
                          {item?.quantity}
                        </span>
                        <span
                          onClick={() =>
                            toggleCartItemQuantity(item?._id, "increment")
                          }
                        >
                          <AiOutlinePlusSquare size="2.5rem" />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemove(item)}
                      className="ml-12 cursor-pointer"
                    >
                      <AiFillDelete size={30} color="red" />
                    </button>
                  </div>
                </div>
              </section>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <section id="cart-bottom">
            <div className="flex justify-around my-5">
              <h3 className="text-2xl font-semibold uppercase">Total: </h3>

              <span className="text-xl font-semibold">{totalPrice} sek</span>
            </div>
            <div className="flex justify-center item-center">
              <button
                type="button"
                className="px-32 py-3 text-2xl uppercase text-[#fafafa] bg-red rounded-xl hover:scale-110 transition-all ease-in-out my-4"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Cart;
