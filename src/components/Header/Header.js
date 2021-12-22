import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Header.module.css";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [button, setButton] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMobileMenu = () => {
    setToggle(false);
  };

  useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    window.addEventListener("resize", showButton);

    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLogo}>
            <NavLink to="/">
              E-EDU<i className="fab fa-artstation"></i>
            </NavLink>
          </div>
          <div className={styles.menuToggleIcon} onClick={handleToggle}>
            <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul
            className={
              toggle
                ? `${styles.active} ${styles.navbarMenu}`
                : `${styles.navbarMenu}`
            }
          >
            <li className={styles.menuItem}>
              <NavLink
                to="/"
                style={({isActive}) =>{
                  return {
                    color: isActive ? "#f09ce5" : ""
                  }
                }}
                className={styles.menuLink}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="*"
                style={({isActive}) =>{
                  return {
                    color: isActive ? "#f09ce5" : ""
                  }
                }}
                className={styles.menuLink}
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/courses"
                style={({isActive}) =>{
                  return {
                    color: isActive ? "#f09ce5" : ""
                  }
                }}
                className={styles.menuLink}
                onClick={closeMobileMenu}
              >
                Courses
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/sign-in"
                className={styles.menuLinkMobile}
                onClick={closeMobileMenu}
                style={({isActive}) =>{
                  return {
                    color: isActive ? "#f09ce5" : ""
                  }
                }}
              >
                Sign In
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/sign-up"
                className={styles.menuLinkMobile}
                onClick={closeMobileMenu}
                style={({isActive}) =>{
                  return {
                    color: isActive ? "#f09ce5" : ""
                  }
                }}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
          <div className={styles.userCorner}>
            <div className={styles.cart}>
              <i className={`fas fa-shopping-cart ${styles.cartIcon}`}></i>
              <span className={styles.cartAmount}>3</span>
            </div>
            {button && <NavLink to="/sign-in"><Button primary>Sign In</Button></NavLink>}
            {button && <NavLink to="/sign-up"> <Button outline>Sign Up</Button> </NavLink>}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
