import React from "react";
import styles from "../css/style.css";

const MercuryLogo = props => {
  return (
    <div className={styles["mercury__logo"]}>
      <div className={styles["logo"]}>
        <a href={props.href} className={styles["logo-img"]} />
      </div>
    </div>
  );
};

export default MercuryLogo;
