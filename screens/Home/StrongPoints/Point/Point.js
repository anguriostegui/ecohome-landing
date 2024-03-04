import React from "react";
import styles from "./point.module.css";
import cn from "classnames";

export default function Point({ item }) {
  return (
    <div className={styles.container}>
      <div className={cn("h4", styles.title)}>{item.title}</div>
      <div className={cn("body-2-bold", styles.description)}>
        {item.description}
      </div>
    </div>
  );
}
