import React from "react";
import styles from "./cta.module.css";
import cn from "classnames";
import icons from "@/constants/icons";

export default function CTA({
  briefcase = icons.briefcase,
  speed = icons.speed,
  layers = icons.layers,
  comment = icons.comment,
}) {
  return (
    <section id="cta" className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.title_container}>
          <div className={cn("h3", styles.title)}>{"Let's team up"}</div>
          <div className={cn("body-2", styles.subtitle)}>
            {"Let's create something users will love."}
          </div>

          <a
            href="mailto:anguriostegui@outlook.com"
            className={cn("button", styles.button)}
          >
            Hire me
          </a>
        </div>

        <div className={styles.circle} />

        <div className={styles.icons}>
          <div className={styles.icon_container}>{briefcase}</div>
          <div className={styles.icon_container}>{speed}</div>
          <div className={styles.icon_container}>{layers}</div>
          <div className={styles.icon_container}>{comment}</div>
        </div>
      </div>
    </section>
  );
}
