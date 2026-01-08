"use client";
import React from "react";
import productImage1 from "@/images/image-product-1.jpg";
import productImage2 from "@/images/image-product-2.jpg";
import productImage3 from "@/images/image-product-3.jpg";
import productImage4 from "@/images/image-product-4.jpg";

import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

const imgArr = [productImage1, productImage2, productImage3, productImage4];
export default function MobileImageCarousel() {
  const size = imgArr.length;
  const [currIndex, setCurrIndex] = React.useState(0);
  function moveToNextSlide() {
    const nextIndex = (currIndex + 1) % size;
    setCurrIndex(nextIndex);
  }
  function moveToPreviousSlide() {
    const prevIndex = (currIndex - 1 + size) % size;
    setCurrIndex(prevIndex);
  }
  return (
    <section
      aria-label="featured products slideshow"
      className="relative lg:hidden"
    >
      <Image
        width={300}
        height={400}
        src={imgArr[currIndex]}
        alt="sneaker image"
        className="w-full md:w-auto mx-auto"
      ></Image>
      <div className="absolute top-[50%] flex justify-between w-full px-2 -translate-y-[50%] ">
        <button
          onClick={moveToPreviousSlide}
          type="button"
          className=" bg-white rounded-full w-10 h-10 grid place-items-center border"
          aria-label="previous slide"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={moveToNextSlide}
          type="button"
          className=" bg-white rounded-full  w-10 h-10 grid place-items-center border"
          aria-label="next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
