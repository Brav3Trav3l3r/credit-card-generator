import React from "react";
import styles from "./CardFront.module.css";

export default function CardFront({ firstTimeLoad, user }) {
  const firstLoad = firstTimeLoad ? styles.animateFirstLoad : "";

  return (
    <main className={`${styles.cardFront} ${firstLoad}`}>
      <div className={styles.data}>
        <div className={styles.circles}>
          <div className={styles.group}>
            <div className={styles.bigCircle}></div>
            <div className={styles.smallCircle}></div>
          </div>
        </div>
        <div className={styles.cardNumber}>
          {user ? user.cardNumber : "0000 0000 0000 0000"}
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            {user ? user.name.toUpperCase() : "JOHN DOE"}
          </div>
          <div className={styles.cvv}>
            {user ? user.expMonth : "00"}/{user ? user.expYear : "00"}
          </div>
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.blurlayer}></div>
        <div className={styles.elipseOne}></div>
        <div className={styles.elipseTwo}></div>
        <div className={styles.elipseThree}></div>
        <div className={styles.elipseFour}></div>
        <div className={styles.elipseFive}></div>
      </div>
    </main>
  );
}
