import React from "react";
import style from "./listiteam.module.css";
import Link from "next/link";
const ListIteam = () => {
  return (
    <>
      <ul className={style.list}>
        <li>
          <Link href="#">Movies</Link>
        </li>
        <li>
          <Link href="#">Tv</Link>
        </li>
        <li>
          <Link href="#">Themes</Link>
        </li>
        <li>
          <Link href="#">Watch</Link>
        </li>
        <li>
          <Link href="#" className={style.btn}>
            <svg
              xmlnsXlink="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 -960 960 960"
              className="icon"
            >
              <path d="M166-69v-679q0-53 36.5-89.5T292-874h376q53 0 89.5 36.5T794-748v679L480-203zm126-191 188-80 188 80v-488H292zm0-488h376z"></path>
            </svg>
            Wishlist
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ListIteam;
