"use client";
import React from "react";
import Image from "next/image";
import productImage1 from "@/images/image-product-1.jpg";
import productImage2 from "@/images/image-product-2.jpg";
import productImage3 from "@/images/image-product-3.jpg";
import productImage4 from "@/images/image-product-4.jpg";
interface DesktopImageCarouselProps {
  openLight: () => void;
  currIndex: number;
  setCurrIndex: React.Dispatch<React.SetStateAction<number>>;
}
export default function DesktopImageCarousel({
  openLight,
  currIndex,
  setCurrIndex,
}: DesktopImageCarouselProps) {
  const imgArr = [productImage1, productImage2, productImage3, productImage4];
  //   const [currImage, setCurrImage] = React.useState(productImage1);
  const isSelectedStyles = "opacity-80 border-orange-500 border-4";
  return (
    <section className="hidden lg:flex flex-col gap-6">
      <Image
        height={500}
        width={400}
        src={imgArr[currIndex]}
        alt="sneaker image"
        className="rounded-lg cursor-pointer"
        onClick={openLight}
      />
      <div className="max-w-[400px] flex justify-between ">
        {imgArr.map((item, index) => {
          return (
            <Image
              key={index}
              height={100}
              width={80}
              src={imgArr[index]}
              alt="sneaker image"
              className={`rounded-md cursor-pointer hover:opacity-90 ${
                index === currIndex && isSelectedStyles
              } `}
              onClick={() => setCurrIndex(index)}
            />
          );
        })}
      </div>
    </section>
  );
}
