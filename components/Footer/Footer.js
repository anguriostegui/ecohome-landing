import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import { mock } from "@/constants";

export default function Footer({ socials = mock.socials }) {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.title_container}>
          <div className={cn("body-2", styles.text)}>Reach out to me</div>
          <a
            href="mailto:anguriostegui@outlook.com"
            className={cn("", styles.title)}
          >
            anguriostegui@outlook.com
          </a>

          <div className={styles.socials}>
            {socials.map((item, index) => (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className={cn("btn-2", styles.button)}
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className={styles.breakline} />

          <div className={cn("caption", styles.copyright)}>
            ©2024 All right reserved
          </div>
        </div>
      </div>
    </section>
  );
}
