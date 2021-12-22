import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <section className={styles.subscription}>
            <h1 className={`section-heading ${styles.subscriptionHeading}`}>
              Join the E-EDU newsletter to receive our best deals
            </h1>
            <p className={styles.subscriptionTxt}>
              You can unsubscribe at any time.
            </p>
            <div className={styles.inputArea}>
              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email..."
                  className={styles.input}
                />
                <Button large outline >
                  Subscribe
                </Button>
              </form>
            </div>
          </section>
          <section className={styles.linkSection}>
            <div className={styles.linkWrapper}>
              <div className={styles.linkItem}>
                <h2>About Us</h2>
                <Link to="/">How it works</Link>
                <Link to="/">Testimonials</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Investors</Link>
                <Link to="/">Terms of Service</Link>
              </div>
              <div className={styles.linkItem}>
                <h2>Contact Us</h2>
                <Link to="/">Affiliate</Link>
                <Link to="/">Get the app</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Help and Support</Link>
                <Link to="/">Sitemap</Link>
              </div>
            </div>
            <div className={styles.linkWrapper}>
              <div className={styles.linkItem}>
                <h2>Recruit</h2>
                <Link to="/">Careers</Link>
                <Link to="/">Teach on E-edu</Link>
                <Link to="/">Voices of employees</Link>
                <Link to="/">Training</Link>
                <Link to="/">Benefits</Link>
              </div>
              <div className={styles.linkItem}>
                <h2>SNS </h2>
                <Link
                  to="/"
                  target="_blank"
                  className={styles.socialIconLink}
                  aria-label="facebook"
                >
                  <i className="fab fa-facebook-f"></i>Facebook
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  className={styles.socialIconLink}
                  aria-label="instagram"
                >
                  <i className="fab fa-instagram"></i>Instagram
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  className={styles.socialIconLink}
                  aria-label="twitter"
                >
                  <i className="fab fa-twitter"></i>Twitter
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  className={styles.socialIconLink}
                  aria-label="youtube"
                >
                  <i className="fab fa-youtube"></i>Youtube
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  className={styles.socialIconLink}
                  aria-label="linkedin"
                >
                  <i className="fab fa-linkedin"></i>Linkedin
                </Link>
              </div>
            </div>
          </section>
          <section className={styles.copyright}>
            <div className={styles.copyrightWrapper}>
              <div className={styles.logo}>
                <Link to="/" className={styles.logoLink}>
                  E-EDU <i className="fab fa-artstation"></i>
                </Link>
              </div>
              <small className={styles.copyrightTxt}>@ 2021 E-edu, Inc.</small>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
