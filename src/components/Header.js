// Here I'm practicing tailwind to style the React components.

import React from "react";

import logo from "../assets/logo.png";

function Header(props) {
  return (
    <header className="flex flex-col items-center mt-8 md:mb-16">
      <img className="mb-8 w-44 h-44 object-contain" src={logo} alt="Art" />
      <h1
        className="text-xl md:text-4xl
       font-semibold tracking-widest text-center uppercase text-amber-800 font-title"
      >
        REacTaRT
      </h1>
      <p className="text-stone-500">A Community of Art lovers</p>
    </header>
  );
}

export default Header;
