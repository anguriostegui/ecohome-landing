import React from "react";
import styles from "./strong_points.module.css";
import cn from "classnames";
import { mock } from "@/constants";
import Point from "./Point";

export default function StrongPoints({ strong_points = mock.strong_points }) {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.title_container}>
          <div className={cn("h3", styles.title)}>Strong points</div>
        </div>

        <div className={styles.strong_points}>
          {strong_points.map((item, index) => (
            <Point key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
