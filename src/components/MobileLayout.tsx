import React from "react";
import MobileImageCarousel from "@/components/MobileImageCarousel";
import ProductDescription from "@/components/ProductDescription";
import Cart from "@/components/Cart";
export default function MobileLayout() {
  return (
    <main className="lg:hidden">
      <MobileImageCarousel />
      <ProductDescription />
      <Cart />
    </main>
  );
}
