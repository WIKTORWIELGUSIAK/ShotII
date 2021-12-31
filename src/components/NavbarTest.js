import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BasketMini from "./BasketMini";
export default function Navbar(props) {
  const { cartItems, onRemove, onAdd } = props;
  const [active, setActive] = useState(["nav-links"]);
  const [open, setOpen] = useState(["hidden"]);
  const openBasket = () => {
    if (open == "hidden") {
      setOpen("");
    }
  };
  const toggleMenu = () => {
    if (active == "nav-links") {
      setActive(["open-nav nav-links"]);
    } else {
      setActive("nav-links");
    }
  };
  const removeBasket = () => {
    if (open === "") {
      setOpen("hidden");
    }
  };
  return (
    <>
      <nav
        className="text-white nav fixed w-full h-10 flex flex-row bg-yellow-900  top-0"
        onMouseLeave={removeBasket}
      >
        <div className="z-50 tracking-widest logo text-3xl text-center font-bold w-full tablet:basis-1/2 tablet:ml-5 tablet:text-left">
          <Link to="/">SZOT II</Link>
        </div>

        <ul
          onMouseEnter={removeBasket}
          className={`flex flex-col tracking-wide text-center justify-around ${active} tablet:basis-1/2 tablet:flex-row tablet:h-10 tablet:static tablet:nav-links-tablet tablet:transition-none`}
        >
          <li>
            <Link to="/about">Tab1</Link>
          </li>
          <li>
            <Link to="/about">Tab2</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <Link to="/basket">
          <div
            className="shop-cart mx-5 h-full flex justify-center items-center"
            onMouseEnter={openBasket}
          >
            <FontAwesomeIcon icon={faBasketShopping} />
            <div className="absolute bottom-1 right-3 text-xs text-red-500 font-extrabold">
              {cartItems.length}
            </div>
          </div>
        </Link>
        <button
          onClick={toggleMenu}
          className="text-black font-bold w-14 h-14 rounded-full bg-yellow-500 fixed bottom-2 right-1 z-50 tablet:hidden"
        >
          Menu
        </button>
        <BasketMini
          open={open}
          onRemove={onRemove}
          onAdd={onAdd}
          cartItems={cartItems}
        />
      </nav>
    </>
  );
}
