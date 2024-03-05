"use client";

import React from "react";
import styles from "./get-started.module.css";
import cn from "classnames";

export default function GetStarted() {
  const scrollToSection = (anchor) => {
    const section = document.getElementById(anchor);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.image_container}>
          <img
            src="/images/search-mockup.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.title_container}>
          <div className={cn("h3", styles.title)}>Get started</div>

          <div className={cn("body-2", styles.description)}>
            Dive into development now with EcoHome. Transform your e-commerce
            vision into reality with just a few clicks.
          </div>
          <div className={styles.buttons}>
            <a
              href="https://ui8.net/angel-uriostegui/products/ecohome-ecommerce-react-native-app"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("button")}
            >
              Get it now
            </a>
            <button
              className={cn("button-stroke")}
              onClick={() => scrollToSection("cta")}
            >
              Reach out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
