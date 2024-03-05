import React from "react";
import styles from "./built-with.module.css";
import cn from "classnames";
import { mock } from "@/constants";
import Tool from "./Tool";

export default function Builtwith({ tools = mock.tools }) {
  return (
    <section id="builtwith" className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.title_container}>
          <div className={cn("body-1-bold", styles.title)}>Built with</div>
        </div>

        <div className={styles.tools}>
          {tools.map((item, index) => (
            <Tool key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
