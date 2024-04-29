import React from "react";
import styles from "./smcard.module.css";
import Link from "next/link";
import Image from "next/image";
import { PkData } from "@/constant/PkData";

const SmCards = () => {
  return (
    <div className={styles.wrapper}>
      <div className='title '>
        Where to watch in <span className='underline'>Pakistan</span>
      </div>

      <div className={styles.cards_wrapper}>
        <div className={styles.smcards}>
          {PkData.map((elm) => {
            let strokeDashoffset = 289.027 - (elm.rate / 10) * 289.027;

            return (
              <Link href='#' className={styles.smcard} key={elm.img}>
                <div className={styles.thumb}>
                  <Image src={elm.img} alt='img' width={64} height={96} />
                </div>
                <div className={styles.details}>
                  <ul>
                    <li>{elm.season} Season</li>
                    <li>{elm.year}</li>
                  </ul>
                  <h3>{elm.title}</h3>
                  <span>{elm.show}</span>
                </div>
                <div className={styles.rating}>
                  <div className={styles.circle}>
                    <div className={styles.circle_rate}>
                      <svg
                        className='CircularProgressbar'
                        viewBox='0 0 100 100'
                      >
                        <path
                          className='CircularProgressbar-trail'
                          d='M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92'
                          strokeWidth='8'
                          fillOpacity='0'
                          style={{
                            stroke: "transparent",
                            strokeDasharray: "289.027px, 289.027px",
                            strokeDashoffset: `${strokeDashoffset}px`,
                          }}
                        ></path>
                        <path
                          className='CircularProgressbar-path'
                          d='M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92'
                          strokeWidth='8'
                          fillOpacity='0'
                          style={{
                            stroke: "rgb(251, 191, 36)",
                            strokeDasharray: "289.027px, 289.027px",
                            strokeDashoffset: `${strokeDashoffset}px`,
                          }}
                        ></path>
                      </svg>
                      <div className={styles.rate}>
                        <span>{elm.rate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SmCards;
