import React from "react";

export default function Basket(props) {
  const { open, cartItems, onAdd, onRemove } = props;
  return (
    <div
      className={`basket grid text-center fixed bg-[#fef9c3] top-10 right-0 ${open}  text-black w-1/4`}
    >
      <h2 className="text-center col-span-full">Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-[7rem_1fr_7rem] py-8 border-b-2"
        >
          <img
            src={`${item.image}`}
            alt=""
            className="w-20 h-20 col-span-1 m-auto"
          />
          <div className="m-auto">{item.title}</div>
          <div className="my-auto">
            <button
              onClick={() => onAdd(item)}
              className="add w-10 h-10 bg-white border-black border-2"
            >
              +
            </button>
            <button
              onClick={() => onRemove(item)}
              className="remove w-10 h-10 bg-white border-black border-2 mx-2"
            >
              -
            </button>
            <div>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
