import React from "react";
import styles from "./features.module.css";
import cn from "classnames";
import Feature from "./Feature";
import mock from "@/constants/mock";

export default function Features({ features = mock.features }) {
  return (
    <section id="features" className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.image_container}>
          <img
            src="/images/features-mockup.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.title_container}>
          <div className={cn("h3", styles.title)}>Main features</div>

          <div className={styles.features}>
            {features.map((item, index) => (
              <>
                <Feature key={item.id} item={item} />
                {index !== features.length - 1 && (
                  <div className={styles.breakline} />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
