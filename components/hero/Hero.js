"use client";
import React from "react";
import style from "./hero.module.css";
import Tags from "./tags/Tags";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "The Dark Knight",
      "Superhero",
      "Christan Bale",
      "Toy Story 3",
      "Friendship",
      "Tom Hanks",
      "Gladitors",
      "Roman Empire",
      "Sigourney Weaver",
      "Russell Crowe",
      "Alien",
      "Spaceship",
      "Sigourney Weaver",
      "Joker",
      "Mental Health",
      "Joaquin Phoenix",
    ],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 100,
  });
  return (
    <div className={style.hero}>
      <div className={style.overlay}></div>;
      <div className={style.hero_wrap}>
        <h1 className={style.title}>
          Discover
          <span className={style.span_tag}>Similar</span>
          <span className='block'>
            Movies and TV
            <br />
            Shows!
          </span>
        </h1>
        <div className={style.search_hero}>
          <div className={style.search}>
            <form className={style.hero_form}>
              <input type='text' />
              <button className={style.btn}>Explorer</button>
            </form>
            <div id='hero_input_search' className={style.search_value}>
              <span className='text-[24px] text-[#e8e8e8] font-bold'>
                {typeEffect}
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
