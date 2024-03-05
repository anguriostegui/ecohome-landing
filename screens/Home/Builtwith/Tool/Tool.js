import React from "react";
import styles from "./tool.module.css";
import cn from "classnames";

export default function Tool({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>{item.logo}</div>
      <div className={cn("body-2-bold", styles.title)}>{item.title}</div>
    </div>
  );
}
