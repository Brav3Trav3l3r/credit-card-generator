import React, { useEffect, useState } from "react";
import styles from "./Toast.module.css";
import { Icon } from "@iconify/react";

export default function Toast() {
  const [animationType, setAnimationType] = useState(styles.slideIn);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationType(styles.slideOut);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`${styles.toast} ${animationType}`}>
      <div className={styles.checkIcon}>
        <Icon icon="lucide:check-circle" />
      </div>
      <div className={styles.message}>
        <h3>Success</h3>
        <p>Card created successfully</p>
      </div>
    </div>
  );
}
