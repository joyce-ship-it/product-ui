import React from "react";
import brandLogo from "@/images/logo.svg";
import menuIcon from "@/images/icon-menu.svg";
// import CartIcon from "@/images/icon-cart.svg";
import { ShoppingCart } from "lucide-react";

import avatar from "@/images/image-avatar.png";
import Image from "next/image";
export default function Header() {
  return (
    <header className="px-3 py-6 flex justify-between">
      <div className="flex space-x-4 items-center">
        <Image width={20} height={20} src={menuIcon} alt="Open Menu" />
        <Image width={130} height={100} src={brandLogo} alt="brand logo" />
      </div>
      <nav className="flex space-x-5 items-center" aria-label="user-actions">
        <button type="button" aria-label="view cart">
          <ShoppingCart size={20} />
        </button>
        <button type="button" aria-label="view user profile">
          <Image width={20} height={20} src={avatar} alt="" />
        </button>
      </nav>
    </header>
  );
}
