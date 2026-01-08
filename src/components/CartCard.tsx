import { Trash2 } from "lucide-react";
import React from "react";
import Image from "next/image";
import productImage1 from "@/images/image-product-1.jpg";
import { useCartContext } from "@/Providers/CartContextProvider";
import { useToggleCartDetailsContext } from "@/Providers/ToggleCartDetailsProvider";

export default function CartCard() {
  const { cartItems, setCartItems, initialState } = useCartContext();
  const sneaker = cartItems.find((items) => items.id === 1);
  const sneakerQuantity = sneaker?.quantity || 0;
  const sneakerTotalAmount = sneaker?.totalAmount;

  // css class for transition when cart details are toggled
  const { showCartInfo } = useToggleCartDetailsContext();

  const classNames = showCartInfo
    ? `   ease-out translate-y-20`
    : `   ease-in -translate-y-50 z-0 duration-200`;

  return (
    <div
      className={`min-w-[290px] min-h-[180px] fixed   bg-white  right-2 lg:right-4 top-0   p-2 rounded-md transition-translate duration-300  shadow-lg ${classNames}`}
    >
      <h4 className="pb-4">Cart</h4>
      <hr />
      {sneakerQuantity === 0 && (
        <p className="pt-4 text-sm">Cart is empty :(</p>
      )}
      {sneakerQuantity > 0 && (
        <>
          <div className="p-2 py-4 flex gap-2 items-center text-sm">
            <Image
              width={50}
              height={80}
              src={productImage1}
              alt="sneaker image-1"
            />
            <div>
              <div>Fall Limited Edition Sneaker</div>
              <div>
                <div className="flex gap-2">
                  <span>$125.00</span>
                  <data value="125.00" className="font-bold ">
                    ${sneakerTotalAmount}
                  </data>
                </div>
              </div>
            </div>
            <Trash2
              onClick={() => setCartItems(initialState)}
              className="text-gray-500 hover:text-red-400 cursor-pointer"
              size={20}
            />
          </div>
          <button className="bg-orange-500 text-white w-full rounded-md cursor-pointer hover:opacity-90 p-2">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
