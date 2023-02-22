import React, { useState, useContext, createContext } from "react";
import { toast } from "react-hot-toast";
// UseContext is a hook that provides a way to pass data or state through the component tree without having to pass down manually through each nested component

const Context = createContext();
// we create the context function and it will be wrap to our main app.js
export const StateContext = ({ children }) => {
  //*define states that will be used
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

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
  const handleAdd = (product, quantity) => {
    //the function takes two parameter product and quantity

    setTotalPrice(
      (previousTotalPrice) => previousTotalPrice + product.price * quantity
    );
    setTotalQuantity(
      (previousTotalQuantity) => previousTotalQuantity + quantity
    );

    //check if we already have the product in cart
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    //check if product exist in cart then just update the quantity
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    // console.log(totalQuantity);
    toast.success(`${quantity} ${product.name} has been added to the cart.`);
  };

  const handleRemove = (product) => {
    // find out which product we are going to update
    foundProduct = cartItems.find((item) => item._id === product._id);
    // filter out the previous state except the one we are going to remove
    const updatedCartItems = cartItems.filter(
      (item) => item._id !== product._id
    );
    setTotalPrice(
      (previousTotalPrice) =>
        previousTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantity(
      (previousQuantity) => previousQuantity - foundProduct.quantity
    );
    setCartItems(updatedCartItems);
  };
  // define variable
  let foundProduct;
  let index;
  const toggleCartItemQuantity = (id, value) => {
    //to find the product we are looking for to update
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    // use filter method (non-mutated method) to filter out all items except the item that has the index that belongs the items we are updating thereby we are not mutating(changing) the state.
    const newCartItems = cartItems.filter((item) => item._id !== id);

    // define an instance of the cartItems state and then take all previous cartItems and product with spread operator and update the quantity of the product we are interested
    if (value === "increment") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice(
        (previousTotalPrice) => previousTotalPrice + foundProduct.price
      ),
        setTotalQuantity((previousTotalQuantity) => previousTotalQuantity + 1);
    } else if (value === "decrement") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice(
          (previousTotalPrice) => previousTotalPrice - foundProduct.price
        ),
          setTotalQuantity(
            (previousTotalQuantity) => previousTotalQuantity - 1
          );
      }
    }
  };
  // we define Context.Provider in return statement to wrap every children and we can pass these states in value property.
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
        handleAdd,
        setShowCart,
        toggleCartItemQuantity,
        handleRemove,
        setCartItems,
        setTotalQuantity,
        setTotalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
