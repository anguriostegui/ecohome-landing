"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (anchor) => {
    const section = document.getElementById(anchor);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.title_container}>
          <h1 className={cn("h2", styles.title)}>
            ECOMMERCE REACT NATIVE & EXPO UI KIT
          </h1>

          <div className={styles.button_wrapper}>
            <a
              href="https://ui8.net/angel-uriostegui/products/ecohome-ecommerce-react-native-app"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("button")}
            >
              Purchase $59
            </a>
            <button
              className={cn("button-stroke")}
              onClick={() => scrollToSection("features")}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        <div className={styles.bottom_content}>
          <div className={styles.image_container}>
            <img
              src="/images/hero-mockup.png"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className={styles.name}>ECOHOME</div>
        </div>
      </div>
    </section>
  );
}
