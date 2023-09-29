import React from "react";
import styles from "./CardBack.module.css";
import LinesGroup from "./LinesGroup";

export default function CardBack({ firstTimeLoad, user }) {
  const firstLoad = firstTimeLoad ? styles.animateFirstLoad : "";

  return (
    <main className={`${styles.cardBack} ${firstLoad}`}>
      <div className={styles.magstripe}></div>
      <div className={styles.cvv}>{user ? user.cvv : "000"}</div>
      <LinesGroup />
    </main>
  );
}
