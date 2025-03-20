"use client";
import React, { useState } from "react";
import Styles from "./header.module.scss";
import { PiBagLight, PiNotepad, PiUser, PiDesktopLight } from "react-icons/pi";
import userIcon from "@/../../public/img/userIcon.png";
import Image from "next/image";
import Link from "next/link";
import PageButton from "../button/button";
import { PiHandTap } from "react-icons/pi";
import { usePathname } from "next/navigation";
const Header = () => {
  let currentPath = usePathname();
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={Styles.header}>
      <div className={Styles.hdWrapper}></div>

      <div className={Styles.headerWrapper}>
        <div className={Styles.headerWrapper__inWrapper}>
          {currentPath === "/dashboard" ? (
            <h2>Dashboard</h2>
          ) : (
            <>
              <div
                className={`${Styles.headerWrapper__logo}`}
              >
                <Link href={"/"} className={Styles.headerWrapper__LogoLink}>
                  <Image
                    src={userIcon}
                    className={Styles.headerWrapper__UserIcon}
                    height={43}
                    width={43}
                    alt="logo image"
                  />
                </Link>
              </div>
              <ul className={`${Styles.headerWrapper__Menu} ${isActive ? Styles.openMenu : ""}`}>
                <li className={`${Styles.headerWrapper__menuList}`}>
                  <Link
                    href={"/about"}
                    className={`${
                      currentPath === "/about" && Styles.menuActive
                    } ${Styles.headerWrapper__menuLink}`}
                  >
                    {" "}
                    <PiUser />
                    <span>About Us</span>
                  </Link>
                </li>
                <li className={`${Styles.headerWrapper__menuList}`}>
                  <Link
                    href={"/mywork"}
                    className={`${
                      currentPath === "/mywork" && Styles.menuActive
                    } ${Styles.headerWrapper__menuLink}`}
                  >
                    {" "}
                    <PiDesktopLight />
                    <span>Projects</span>
                  </Link>
                </li>
                {/* <li className={`${Styles.headerWrapper__menuList}`}>
                  <Link
                    href={"/contact"}
                    className={`${
                      currentPath === "/contact" && Styles.menuActive
                    } ${Styles.headerWrapper__menuLink}`}
                  >
                    {" "}
                    <PiBagLight />
                    <span>Contact Us</span>
                  </Link>
                </li> */}
                <li className={`${Styles.headerWrapper__menuList}`}>
                  <Link
                    href={"/resume"}
                    className={`${
                      currentPath === "/resume" && Styles.menuActive
                    } ${Styles.headerWrapper__menuLink}`}
                  >
                    {" "}
                    <PiNotepad />
                    <span>Resume</span>
                  </Link>
                </li>
              </ul>
              <div
                className={`${Styles.rightHeader} flex justify-between items-center`}
              >
                <div className={Styles.saybtn}>
                  <PageButton
                    link={"https://wa.me/919935990927"}
                    targetLink="_blank"
                  >
                    <span>Say Hello!</span>
                    <PiHandTap />
                  </PageButton>
                </div>

                <div className={Styles.headerMenuToggler} onClick={toggleClass}>
                  <div
                    className={`${Styles.toggleMenu} ${Styles.hamburger} ${
                      Styles.islg
                    } ${isActive ? Styles.is_active : ""}`}
                    onClick={toggleClass}
                  >
                    <span className={`${Styles.hamburger_line}`}></span>
                    <span className={`${Styles.hamburger_line}`}></span>
                    <span className={`${Styles.hamburger_line}`}></span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
