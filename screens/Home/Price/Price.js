import React from "react";
import styles from "./price.module.css";
import cn from "classnames";

export default function Price() {
  return (
    <section id="pricing" className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.title_container}>
          <div className={cn("h3", styles.title)}>One price</div>
        </div>

        <div className={styles.price_card}>
          <div className={cn("h3", styles.price)}>
            $59{" "}
            <div className={cn("body-2-bold", styles.price_text)}>
              / One time
            </div>
          </div>

          <div className={cn("body-2", styles.description)}>
            Launch your e-commerce app today with the EcoHome UI Kit, only $59.
            Ready-to-use React Native components and Expo support included!
          </div>

          <a
            href="https://ui8.net/angel-uriostegui/products/ecohome-ecommerce-react-native-app"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("button", styles.button)}
          >
            Purchase $59
          </a>
        </div>
      </div>
    </section>
  );
}
