import React from "react";
import styles from "./Container.moudle.css";

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
