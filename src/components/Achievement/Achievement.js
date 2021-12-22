import React from "react";
import styles from "./Achievement.module.css";
import bgImg from "./../../assets/img/achieve-background-img.jpg"

function Achievement() {
  return (
    <section className={styles.container} style={{ backgroundImage: `url(${bgImg})` }}>
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <div className={styles.group}>
        <i className="fa fa-bookmark"></i>
        <p className={styles.text}>Teachers</p>
        <p className={styles.amount}>200</p>
      </div>
      <div className={styles.group}>
        <i className="fa fa-book"></i>
        <p className={styles.text}>Lessons</p>
        <p className={styles.amount}>555</p>
      </div>
      <div className={styles.group}>
        <i className="fa fa-mortar-board"></i>
        <p className={styles.text}>Students</p>
        <p className={styles.amount}>9999</p>
      </div>
    </div>
  </section>
  );
}

export default Achievement;
