"use client";
import Image from "next/image";
import React from "react";
import productImage1 from "@/images/image-product-1.jpg";
import productImage2 from "@/images/image-product-2.jpg";
import productImage3 from "@/images/image-product-3.jpg";
import productImage4 from "@/images/image-product-4.jpg";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  closeLight: () => void;
  currIndex: number;
  setCurrIndex: React.Dispatch<React.SetStateAction<number>>;
}
export default function Lightbox({
  closeLight,
  currIndex,
  setCurrIndex,
}: LightboxProps) {
  const imgArr = [productImage1, productImage2, productImage3, productImage4];
  const imageArrSize = imgArr.length;

  function goToNextSlide() {
    setCurrIndex((prevIndex) => (prevIndex + 1) % imageArrSize);
  }
  function goToPreviousSlide() {
    setCurrIndex((prevIndex) => (prevIndex - 1 + imageArrSize) % imageArrSize);
  }
  return (
    <div className="min-h-screen absolute inset-0 bg-black/70 z-40">
      <section className="min-h-screen grid place-items-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="relative">
            <Image
              src={imgArr[currIndex]}
              height={400}
              width={500}
              alt="sneaker image"
              className="rounded-lg"
            />
            <div className="absolute top-1/2 flex justify-between w-full -translate-y-1/2">
              <button
                onClick={goToPreviousSlide}
                aria-label="move to next image"
                className="p-2 bg-white rounded-full  -translate-x-1/2 cursor-pointer border border-transparent hover:border-orange-500"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={goToNextSlide}
                aria-label="move to previous image"
                className="p-2 bg-white rounded-full translate-x-1/2 cursor-pointer border border-transparent hover:border-orange-400"
              >
                <ChevronRight />
              </button>
            </div>
            <X
              onClick={closeLight}
              size={24}
              className="absolute -top-8 right-0 text-white hover:text-red-500 duration-200 ease-out transition-colors cursor-pointer"
            />
          </div>
          <div className="flex gap-4 ">
            {imgArr.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={item}
                  height={75}
                  width={80}
                  alt="sneaker image"
                  className={`rounded-md cursor-pointer ${
                    currIndex === index
                      ? "border-4 border-orange-500 opacity-80 "
                      : ""
                  }`}
                  onClick={() => setCurrIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
