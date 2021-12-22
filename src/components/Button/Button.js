import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

function Button({ children, primary, secondary,secondary2, small, large, outline , outline2 }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.secondary2]: secondary2,
    [styles.large]: large,
    [styles.small]: small,
    [styles.outline]: outline,
    [styles.outline2]: outline2,


  });

  return <button className={classes}>{children}</button>;
}

export default Button;
