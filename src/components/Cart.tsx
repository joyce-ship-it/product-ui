"use client";
import { ShoppingCartIcon, Minus, Plus } from "lucide-react";
import React from "react";
import CartCard from "./CartCard";
import { useCartContext } from "@/Providers/CartContextProvider";
import { useToggleCartDetailsContext } from "@/Providers/ToggleCartDetailsProvider";

export default function Cart() {
  const { cartItems, setCartItems } = useCartContext();
  const sneakerItem = cartItems.find((item) => item.id === 1);
  const sneakerItemQuantity = sneakerItem?.quantity || 0;
  const { showCartInfo } = useToggleCartDetailsContext();
  function addToCart(id: number) {
    setCartItems((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalAmount: (item.quantity + 1) * item.itemPrice,
          };
        } else {
          return item;
        }
      });
    });
  }
  function removeFromCart(id: number) {
    setCartItems((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              totalAmount: item.quantity * item.itemPrice,
            };
          } else {
            return {
              id: 1,
              itemName: "",
              itemPrice: 125,
              quantity: 0,
              totalAmount: 0,
            };
          }
        } else {
          return item;
        }
      });
    });
  }
  return (
    <div className="p-4 flex flex-col gap-4">
      <section aria-label="pricing">
        <div className="flex justify-between items-center md:flex-col md:items-start">
          <div className="flex space-x-2.5 items-center">
            <data className="font-bold text-3xl">$125.00</data>
            <span className="text-sm text-slate-200 px-2 py-1 rounded-md font-bold bg-slate-950">
              50%
            </span>
          </div>
          <data className="font-medium tex-lg line-through">$250.00</data>
        </div>
        <span className="sr-only">
          Current price: $125.00 at 50% discount only.
        </span>
      </section>
      <section className="flex flex-col gap-4">
        <div className=" flex justify-between p-2">
          <div onClick={() => removeFromCart(1)} className="cursor-pointer">
            <Minus color="hsl(24.95798319327731, 100%, 53.333333333333336%)" />
            <span className="sr-only">Remove item from cart</span>
          </div>
          <div>
            <span>{sneakerItemQuantity}</span>
            <span className="sr-only">Remove item from cart</span>
          </div>
          <div onClick={() => addToCart(1)} className="cursor-pointer">
            <Plus color="hsl(24.95798319327731, 100%, 53.333333333333336%)" />
            <span className="sr-only">Add item to cart</span>
          </div>
        </div>
        <button
          className=" grid place-items-center w-full  px-2 py-4 rounded-lg bg-orange-500 cursor-pointer hover:opacity-90 transition-colors duration-300"
          aria-label="Add item to cart"
          onClick={() => addToCart(1)}
        >
          <div className="flex space-x-4">
            <ShoppingCartIcon />
            <span className="font-bold">Add to cart</span>
          </div>
        </button>
      </section>
      <CartCard />
    </div>
  );
}
