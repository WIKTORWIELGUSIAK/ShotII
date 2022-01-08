import React from "react";

export default function About() {
  return (
    <div>
      <div className=" grid grid-cols-2">
        <div className="col-span-full bg-black z-50 h-10 static mt-10"></div>
        <div className="h-screen mt-20"></div>
        <div className="relative">
          <div className=" text-center ">
            <h2 className="text-4xl font-bold mb-5 sticky">Order info:</h2>
            <div className="py-2">ITEMS PRICE:</div>
            <div className="py-2">SHIPPING PRICE:</div>
            <div className="py-2 font-bold">TOTAL PRICE:</div>
          </div>
        </div>
      </div>
    </div>
  );
}
