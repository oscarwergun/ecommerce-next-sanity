import React, { useState, useEffect, useContext, createContext } from "react";
import { toast } from "react-hot-toast";
// UseContext is a hook that provides a way to pass data or state through the component tree without having to pass down manually through each nested component

const Context = createContext();
// we create the context function and it will be wrap to our main app.js
export const StateContext = ({ children }) => {
  //*define states that will be used
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [quantity, setQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState();

  //*define functions that will be used
  const increaseQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((previousQuantity) => {
      if (previousQuantity - 1 < 1) return 1;
      else return previousQuantity - 1;
    });
  };
  const onAdd = (product, qnt) => {
    //the function takes two parameter product and quantity
    //check if we already have the product in cart
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (previousTotalPrice) => previousTotalPrice + product.price * qnt
    );
    setTotalQuantity((previousTotalQuantity) => previousTotalQuantity + qnt);
    //check if product exist in cart then just update the quantity
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            qnt: cartProduct.quantity + qnt,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = qnt;
      setCartItems([...cartItems, { ...product }]);
    }
    console.log(quantity)
    toast.success(`${quantity} ${product.name} has been added to the cart.`);
  };

  // we define Context.Provider in return statement to wrap every children and we can pass these states in value property
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        quantity,
        totalQuantity,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
