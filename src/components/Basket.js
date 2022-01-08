import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, deleteProduct } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + shippingPrice;
  console.log(cartItems);
  return (
    <div
      className={`flex z-0 py-16 flex flex-col w-full bg-gray-100 w-full min-h-screen  tablet:px-16`}
    >
      <h2 className="mt-10 w-full mx-auto text-center text-6xl font-semibold tablet:col-span-full">
        Cart Items
      </h2>
      {cartItems.length === 0 && (
        <div className="flex my-auto w-full justify-center text-6xl font-bold text-center">
          Your cart is empty
        </div>
      )}
      <div className="tablet:flex tablet:flex-row">
        <div className="w-full">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid mt-5 p-8 px-6 grid-cols-2 border-2 mx-3 bg-white relative"
            >
              <div className="absolute top-1 right-1">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={() => deleteProduct(item)}
                />
              </div>
              <img
                src={`${item.image}`}
                alt=""
                className="my-auto w-20 row-span-2 gap-1"
              />
              <div className="text-center ">{item.title}</div>
              <div className="flex flex-col center">
                <div className="text-center py-2">
                  {item.qty} x ${item.price.toFixed(2)}
                </div>
                <div className="buttons flex justify-between">
                  <button
                    onClick={() => onAdd(item)}
                    className="px-3 bg-yellow-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemove(item)}
                    className="px-3 py-1 bg-yellow-300"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full relative">
          {cartItems.length !== 0 && (
            <div className="mt-10 col-span-full text-center fixed justify-center grid w-3/6">
              <h2 className="text-4xl font-bold mb-5">Order info:</h2>
              <div className="py-2 text-xl">
                ITEMS PRICE: {itemPrice.toFixed(2)}$
              </div>
              <div className="py-2 text-xl">
                SHIPPING PRICE: {shippingPrice.toFixed(2)}$
              </div>
              <div className="py-2 font-bold text-2xl border-t-2 border-gray-400 px-10">
                TOTAL PRICE: {totalPrice.toFixed(2)}$
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
