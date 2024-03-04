import React from "react";
import styles from "./feature.module.css";
import cn from "classnames";

export default function Feature({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>{item.icon}</div>

      <div className={styles.title_container}>
        <div className={cn("body-2-bold", styles.title)}>{item.title}</div>
        <div className={cn("body-2", styles.description)}>
          {item.description}
        </div>
      </div>
    </div>
  );
}
