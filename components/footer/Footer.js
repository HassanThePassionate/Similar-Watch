import Image from "next/image";
import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <footer className={style.footer}>
        <div className={style.right}>
          <div className={style.f_logo}>
            <span className={style.logx}>
              <Image src="/f-logo.png" alt="logo" width={30} height={30} />
              LocalCan™
            </span>
            <p>
              Develop your apps with .local domains <br />
              and persistent Public URLs
            </p>
          </div>
          <div className={style.social}>
            <div className="img flex items-center gap-3">
              <Image src="/X.png" alt="twitter" width={30} height={30} />
              <Image src="/g.png" alt="github" width={30} height={30} />
              <Image src="/y.png" alt="youtube" width={30} height={30} />
            </div>
            <p>© 2024 Similar-Watch™. All rights reserved.</p>
          </div>
        </div>
        <div className={style.left}>
          <div className={style.iteam}>
            <h4>App</h4>
            <ul>
              <li>Download</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div className={style.iteam}>
            <h4>Resources</h4>
            <ul>
              <li>Ngrok alternative</li>
              <li>Local domains</li>
              <li>Free webhook tester</li>
              <li>Become an affiliate</li>
              <li>EULA</li>
            </ul>
          </div>
          <div className={style.iteam}>
            <h4>Documentation</h4>
            <ul>
              <li>Public URLs</li>
              <li>Custom domains</li>
              <li>Local domains</li>
              <li>Inspect traffic</li>
              <li>Reverse proxy</li>
              <li>Troubleshooting</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
