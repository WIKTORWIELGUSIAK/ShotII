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
  const closeMenu = () => {
    setActive("nav-links");
  };
  const removeBasket = () => {
    if (open === "") {
      setOpen("hidden");
    }
  };
  return (
    <>
      <nav
        className="text-white nav fixed w-full h-12 flex flex-row bg-yellow-900  top-0 z-50"
        onMouseLeave={removeBasket}
      >
        <div className="z-50 tracking-widest logo text-3xl text-center font-bold my-auto w-full tablet:ml-10 tablet:text-left">
          <Link onClick={closeMenu} to="/">
            SZOT II
          </Link>
        </div>

        <ul
          onMouseEnter={removeBasket}
          className={` z-40 flex flex-col tracking-wide text-center justify-around ${active} tablet:basis-1/2 tablet:mr-10 tablet:flex-row tablet:h-10 tablet:static tablet:nav-links-tablet tablet:transition-none my-auto`}
        >
          <li>
            <Link onClick={closeMenu} to="/about">
              Tab1
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/about">
              Tab2
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
        <Link to="/basket">
          <div
            className="absolute shop-cart mx-1 px-1.5 pl-10 h-full flex items-center right-0 z-40"
            onMouseEnter={openBasket}
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faBasketShopping} />
            <div
              onClick={closeMenu}
              className="absolute bottom-0.5 right-0 text-xs text-red-500 font-extrabold"
            >
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
