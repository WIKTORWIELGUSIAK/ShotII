import React from "react";

export default function Test(props) {
  const { recipies, onAdd } = props;
  console.log(recipies);
  return (
    <div className=" grid gap-4 mb-16 mt-10 tablet:grid-cols-2 laptop:grid-cols-3 4K:grid-cols-4 laptopL:gap-10 laptop:gap-6 4K:gap-16">
      {recipies.map((product) => (
        <div
          key={product.id}
          className="w-full h-96 border-2 bg-white py-3 pt-4"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-36 h-1/2 mx-auto"
          />
          <div className=" grid grid-rows-2 pt-5 h-1/2">
            <h3 className="text-center my-auto">{product.title}</h3>

            <div className=" h-1/2">
              <div className="my-2">${product.price}</div>
              <button
                className="p-2 rounded-3xl  bg-yellow-500"
                onClick={() => onAdd(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
