import React from "react";
import style from "./hero.module.css";
import Tags from "./tags/Tags";
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.overlay}></div>
      <div className={style.hero_wrap}>
        <h1 className={style.title}>
          Discover
          <span className={style.span_tag}>Similar</span>
          <span className="block">
            Movies and TV
            <br />
            Shows!
          </span>
        </h1>
        <div className={style.search_hero}>
          <div className={style.search}>
            <form className={style.hero_form}>
              <input type="text" />
              <button className={style.btn}>Explorer</button>
            </form>
            <div id="hero_input_search" className={style.search_value}>
              <span className="text-[24px] text-[#e8e8e8] font-bold">
                Joker
              </span>
            </div>
          </div>
        </div>
      </div>
      <Tags />
    </div>
  );
};

export default Hero;
