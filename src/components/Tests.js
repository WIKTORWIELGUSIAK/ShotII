import React, { useState, useEffect } from "react";
import Test from "./Test";

export default function Tests(props) {
  const [recipies, setRecipies] = useState([]);
  const { onAdd } = props;
  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setRecipies(data);
  };
  return (
    <div className="w-full h-full px-10 pt-10 grid text-center bg-gray-100">
      <Test onAdd={onAdd} recipies={recipies} />
    </div>
  );
}
