"use client";
import React from "react";
import brandLogo from "@/images/logo.svg";
import menuIcon from "@/images/icon-menu.svg";
import { ShoppingCart } from "lucide-react";
import { useSidebar } from "@/Providers/SidebarProvider";
import { useCartContext } from "@/Providers/CartContextProvider";
import { useToggleCartDetailsContext } from "@/Providers/ToggleCartDetailsProvider";
import Link from "next/link";

import avatar from "@/images/image-avatar.png";
import Image from "next/image";

export default function Header() {
  const { setOpen } = useSidebar();
  const { cartItems } = useCartContext();
  const { setShowCartInfo } = useToggleCartDetailsContext();

  const cartItemsQuantity = cartItems.reduce((acc, curr) => {
    return (acc += curr.quantity);
  }, 0);
  return (
    <header className="px-3 py-6 flex justify-between sticky top-0 z-10 bg-white lg:py-0">
      <div className="flex space-x-4 items-center lg:space-x-6">
        <Image
          width={20}
          height={20}
          src={menuIcon}
          alt="Open Menu"
          onClick={() => setOpen(true)}
          className="cursor-pointer lg:hidden"
        />
        <Image width={130} height={100} src={brandLogo} alt="brand logo" />
        <nav className="hidden lg:flex  gap-4">
          <Link
            href={"#"}
            className="font-bold hover:text-slate-500 border-b border-b-transparent hover:border-b-orange-500 pb-4 pt-4"
          >
            Collections
          </Link>
          <Link
            href={"#"}
            className="font-bold hover:text-slate-500 border-b border-b-transparent hover:border-b-orange-500 pb-4 pt-4"
          >
            Men
          </Link>
          <Link
            href={"#"}
            className="font-bold hover:text-slate-500 border-b border-b-transparent hover:border-b-orange-500 pb-4 pt-4"
          >
            Women
          </Link>
          <Link
            href={"#"}
            className="font-bold hover:text-slate-500 border-b border-b-transparent hover:border-b-orange-500 pb-4 pt-4"
          >
            About
          </Link>
          <Link
            href={"#"}
            className="font-bold hover:text-slate-500 border-b border-b-transparent hover:border-b-orange-500 pb-4 pt-4"
          >
            Contact
          </Link>
        </nav>
      </div>
      <nav className="flex space-x-5 items-center" aria-label="user-actions">
        <button
          onClick={() => setShowCartInfo((prevVal) => !prevVal)}
          type="button"
          aria-label="view cart"
          className="relative"
        >
          <ShoppingCart size={20} className="cursor-pointer" />
          {cartItemsQuantity > 0 && (
            <span className="absolute -top-2 -right-1  w-4 h-4 bg-orange-500 text-white text-[12px] rounded-full grid place-items-center">
              {cartItemsQuantity}
            </span>
          )}
        </button>
        <button type="button" aria-label="view user profile">
          <Image width={25} height={25} src={avatar} alt="" />
        </button>
      </nav>
    </header>
  );
}
