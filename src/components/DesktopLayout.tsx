"use client";
import React from "react";
import DesktopImageCarousel from "./DesktopImageCarousel";
import ProductDescription from "./ProductDescription";
import Cart from "./Cart";
import Lightbox from "./Lightbox";

export default function DesktopLayout() {
  const [openLightbox, setOpenLightbox] = React.useState(false);
  const [currIndex, setCurrIndex] = React.useState(0);
  function openLight() {
    setOpenLightbox(true);
  }
  function closeLight() {
    setOpenLightbox(false);
  }
  return (
    <main className="hidden lg:grid lg:grid-cols-2  max-w-[900px] mx-auto gap-4 mt-6">
      <DesktopImageCarousel
        openLight={openLight}
        currIndex={currIndex}
        setCurrIndex={setCurrIndex}
      />
      <section className="flex flex-col gap-4 ">
        <ProductDescription />
        <Cart />
      </section>
      {openLightbox && (
        <Lightbox
          closeLight={closeLight}
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
        />
      )}
    </main>
  );
}
