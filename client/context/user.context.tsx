"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import ShoppingCart from "../components/cart/ShoppingCart";
import { UserContextType, CartItemType, Product, UserType } from "../typin";

const ADD_TO_CART = "ADD_TO_CART";

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userData, setUser] = useState<UserType | null>();
  // const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const setUserData = (user: UserType | null) => {
    if (user !== null) {
      return setUser(user);
    }
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user: userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

// totalPrice: 0,
// showCart: false,
// cartItems: undefined,
// totalQuantity: 0,
// totalUniqueItems: 0,

// const [totalPrice, setTotalPrice] = useState(0);
// const [showCart, setShowCart] = useState(false);
// const [totalQuantity, setTotalQuantity] = useState(0);
// const [totalUniqueItems, setTotalUniqueItems] = useState(0);
// const [qty, setQty] = useState(0);

// const incQty = () => {
//   setQty((prevQty) => prevQty + 1);
// };
// const decQty = () => {
//   setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
// };

// const onAdd = (product: Product, quantity: number) => {
//   const checkProductExists = cardItems?.find(
//     (item) => item._id === product._id
//   );

//   setTotalPrice((prev) => prev + product.price * quantity);
//   setTotalQuantity((prev) => prev + quantity);

//   if (checkProductExists) {
//     const updatedCart = cardItems?.map((cartItem) => {
//       if (cartItem._id === product._id)
//         return {
//           ...cartItem,
//           quantity: cartItem.quantity + quantity,
//         };
//     });

//     if (updatedCart) setCardItems(updatedCart as Product[]);
//   } else {
//     product.quantity = quantity;
//     setCardItems([...(cardItems as Product[]), { ...product }]);
//   }
// };
