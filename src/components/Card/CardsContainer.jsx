import React from "react";
import styles from "./CardsContainer.module.css";

export default function CardsContainer({ children }) {
  return <div className={styles.cardContainer}>{children}</div>;
}
