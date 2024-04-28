import React from "react";
import style from "./logo.module.css";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="#" className={style.logo}>
        <div className="relative flex items-center -mb-1 transition-colors first-line:dark:opacity-80">
          <span className="pb-1.5 leading-none font-bold text-2xl md:text-3xl text-[#e8e8e8] ">
            Similar
          </span>
          <span className="ml-1 flex items-center rounded-xl bg-[#e8e8e8] min-h-[34px] md:min-h-[38px] px-2.5 mb-1 ">
            <span className="text-xl font-bold leading-none text-black md:text-xl ">
              Watch
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
