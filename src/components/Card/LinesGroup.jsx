import React from "react";
import styles from "./LinesGroup.module.css";

export default function LinesGroup() {
  return (
    <div className={styles.lines}>
      <div className={styles.layerOne}>
        <div style={{ width: "65%" }} className={styles.line}></div>
        <div style={{ width: "15%" }} className={styles.line}></div>
        <div style={{ width: "15%" }} className={styles.line}></div>
        <div style={{ width: "5%" }} className={styles.line}></div>
      </div>
      <div className={styles.layerTwo}>
        <div style={{ width: "15%" }} className={styles.line}></div>
        <div style={{ width: "40%" }} className={styles.line}></div>
        <div style={{ width: "30%" }} className={styles.line}></div>
        <div style={{ width: "5%" }} className={styles.line}></div>
      </div>
      <div className={styles.layerThree}>
        <div style={{ width: "5%" }} className={styles.line}></div>
        <div style={{ width: "15%" }} className={styles.line}></div>
        <div style={{ width: "15%" }} className={styles.line}></div>
        <div style={{ width: "65%" }} className={styles.line}></div>
      </div>
    </div>
  );
}
