import React, { useState, use } from "react";
// import ReactDom from "react-dom";
export default function Navbar() {
  const [active, setActive] = useState("hidden");
  console.log(active);
  const toggleMenu = () => {
    if (active === "hidden") {
      setActive("");
      // document.body.style.overflow = ["hidden"];
    } else {
      setActive("hidden");
      // document.body.style.overflow = "visible";
    }
  };
  return (
    <>
      <nav className="text-white nav fixed w-full h-10 flex flex-row bg-yellow-800  top-0 z-50">
        <div className="tracking-widest logo text-3xl text-center font-bold w-full tablet:basis-1/2 tablet:ml-5 tablet:text-left">
          SZOT II
        </div>
        <ul className="tracking-wide text-base flex-row hidden tablet:flex justify-center items-center h-full justify-between basis-1/2 mr-10">
          <li>TAB 1</li>
          <li>TAB 2</li>
          <li className="contact">CONTACT</li>
        </ul>
        <button
          onClick={toggleMenu}
          className="text-black font-bold w-14 h-14 rounded-full bg-yellow-500 fixed bottom-2 right-2 z-50 tablet:hidden"
        >
          Menu
        </button>
      </nav>

      <div
        className={`justify-center items-center flex fixed top-0 w-full h-full bg-yellow-800 ${active}`}
      >
        <ul className="tracking-wide h-3/4 text-base text-white flex-col flex justify-center items-center h-full justify-around">
          <li onClick={toggleMenu}>TAB 1</li>
          <li onClick={toggleMenu}>TAB 2</li>
          <li className="contact">CONTACT</li>
        </ul>
      </div>
    </>
  );
}
