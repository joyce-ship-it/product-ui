import React from "react";

export default function ProductDescription() {
  return (
    <section className="flex flex-col gap-4 p-4">
      <span className="uppercase text-[12px]  font-bold opacity-70  rounded-md self-start ">
        Sneaker Company
      </span>
      <h1 className="text-2xl font-bold lg:text-4xl">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-sm opacity-90">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
    </section>
  );
}
