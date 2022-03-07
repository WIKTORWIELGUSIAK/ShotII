/** @format */

import React, { useState } from "react";
import Basket from "./components/Basket";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    //.find() zwraca pierwsze element tablicy, który spełnia warunek podanej funkcji testującej
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const deleteProduct = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };
  return (
    <Router>
      <Navbar onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Items onAdd={onAdd} />} />
        <Route
          path="/basket"
          element={
            <Basket
              deleteProduct={deleteProduct}
              onRemove={onRemove}
              onAdd={onAdd}
              cartItems={cartItems}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
