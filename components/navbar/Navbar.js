import React from "react";
import style from "./navbar.module.css";
import Logo from "./logo/Logo";
import Serach from "./search/Serach";
import ListIteam from "./listiteam/ListIteam";
import Hero from "../hero/Hero";
const Navbar = () => {
  return (
    <div>
      <header className="bg-[#0a1016]" id={style.header}>
        <div className="header_container">
          <nav className="w-full flex items-center" id={style.navbar}>
            <Logo />
            <Serach />
            <ListIteam />
          </nav>
        </div>
      </header>
      <Hero />
    </div>
  );
};

export default Navbar;
