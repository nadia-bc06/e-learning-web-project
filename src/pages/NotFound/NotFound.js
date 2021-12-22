import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import bgImg from "./../../assets/img/not-found-bg.jpg";
import styles from "./NotFound.module.css";

function NotFound() {

  useEffect(()=> {
    window.scroll({
      top: 0,
      behavior:"smooth"
    })
  }, [])

  return (
    <section
      className={styles.container}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Oops!</h1>
        <p className={styles.subtitle}>404 - Page not found</p>
        <p className={styles.description}>
          The page you are looking for might have been removed <br />
          had its name changed or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button outline2 large>
            GO BACK HOME
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
