import React from "react";
import style from "./search.module.css";
const Serach = () => {
  return (
    <div className={style.search_wraper}>
      <form className={style.form}>
        <input
          className={style.input}
          placeholder="Search for Movies, TV Shows, Themes &amp; Cast "
          type="text"
          value=""
        />
        <span className={style.search_icon}>
          <svg
            viewBox="0 0 24 24"
            class={style.icon}
            height={20}
            width={20}
            fill="#fff"
          >
            <path d="M11 2a9 9 0 0 1 9 9 8.96 8.96 0 0 1-1.968 5.617l3.675 3.676a1 1 0 0 1-1.32 1.497l-.094-.083-3.676-3.675A8.96 8.96 0 0 1 11 20a9 9 0 1 1 0-18m0 2a7 7 0 1 0 0 14c1.89 0 3.606-.749 4.865-1.967a1 1 0 0 1 .077-.09l.09-.077A6.98 6.98 0 0 0 18 11a7 7 0 0 0-7-7"></path>
          </svg>
        </span>
      </form>
    </div>
  );
};

export default Serach;
