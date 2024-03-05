import React from "react";
import styles from "./process.module.css";
import cn from "classnames";
import Step from "./Step";
import { mock } from "@/constants";

export default function Process({ steps = mock.steps }) {
  return (
    <section className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.title_container}>
          <div className={cn("h3", styles.title)}>Easy install</div>
        </div>

        <div className={styles.process}>
          <div className={styles.dots}>
            <div className={styles.dotted_line} />
            {[...Array(4)].map((_, index) => (
              <div key={index} className={styles.dot} />
            ))}
          </div>

          <div className={styles.steps}>
            {steps.map((item, index) => (
              <Step key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className={cn("body-2", styles.note)}>
          <strong>NOTE:</strong> Ensure Node.js and either Expo CLI or React
          Native CLI are installed on your machine before beginning.
        </div>
      </div>
    </section>
  );
}
