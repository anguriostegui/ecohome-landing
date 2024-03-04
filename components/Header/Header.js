"use client";

import React from "react";
import styles from "./header.module.css";
import Logo from "../Logo";
import cn from "classnames";

const navLinks = [
  {
    id: 1,
    title: "Features",
    anchor: "features",
  },
  {
    id: 2,
    title: "Showcase",
    anchor: "showcase",
  },
  {
    id: 3,
    title: "Built with",
    anchor: "builtwith",
  },
  {
    id: 4,
    title: "Pricing",
    anchor: "pricing",
  },
];

export default function Header() {
  const [visible, setVisible] = React.useState(false);

  const scrollToSection = (anchor) => {
    const section = document.getElementById(anchor);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setVisible(false);
  };

  //   const changeBackground = () => {
  //     const changeColorScrollPosition = 100;

  //     if (window.scrollY >= changeColorScrollPosition) {
  //       setChangeColor(true);
  //     } else {
  //       setChangeColor(false);
  //     }
  //   };

  //   React.useEffect(() => {
  //     window.addEventListener("scroll", changeBackground);

  //     return () => {
  //       window.removeEventListener("scroll", changeBackground);
  //     };
  //   }, []);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Logo className={cn("body-2-semibold", styles.logo)} />

        <div className={cn(styles.menu, { [styles.active]: visible })}>
          <div className={styles.links}>
            {navLinks.map((item, index) => (
              <button
                key={index}
                className={cn("btn-2", styles.link)}
                onClick={() => scrollToSection(item.anchor)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <button className={cn("button", styles.button)}>Purchase $59</button>
        </div>

        <button
          className={cn(styles.burger, {
            [styles.active]: visible,
          })}
          onClick={() => setVisible(!visible)}
        ></button>
      </div>
    </header>
  );
}
