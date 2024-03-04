import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={cn("section-hero")}>
      <div className={cn("container")}>
        <div className={styles.title_container}>
          <h1 className={cn("h2", styles.title)}>
            ECOMMERCE REACT NATIVE & EXPO UI KIT
          </h1>

          <div className={styles.button_wrapper}>
            <button className={cn("button")}>PURCHASE $59</button>
            <button className={cn("button-stroke")}>LEARN MORE</button>
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
