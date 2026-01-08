"use client";

import React from "react";
interface CartItemProps {
  id: number;
  itemName: string;
  itemPrice: number;
  quantity: number;
  totalAmount: number;
}

interface CartContextProps {
  cartItems: CartItemProps[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemProps[]>>;
  initialState: CartItemProps[];
}

const CartContext = React.createContext<CartContextProps | undefined>(
  undefined
);
export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = [
    {
      id: 1,
      itemName: "Fall Limited Edition Sneakers",
      itemPrice: 125,
      quantity: 0,
      totalAmount: 0,
    },
  ];
  const [cartItems, setCartItems] =
    React.useState<CartItemProps[]>(initialState);
  const value = { cartItems, setCartItems, initialState };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw Error("useContext should be used only inside  CartContextProvider");
  } else {
    return context;
  }
}
