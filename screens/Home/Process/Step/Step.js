import React from "react";
import styles from "./step.module.css";
import cn from "classnames";

export default function Step({ item }) {
  return (
    <div className={styles.container}>
      <div className={cn("body-2-bold", styles.title)}>{item.title}</div>
      <div className={cn("body-2", styles.description)}>{item.description}</div>
    </div>
  );
}
