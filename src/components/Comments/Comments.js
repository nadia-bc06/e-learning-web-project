import React from "react";
import styles from "./Comments.module.css";
import img1 from "./../../assets/img/comment-1.jpg";
import img2 from "./../../assets/img/comment-2.jpg";
import img3 from "./../../assets/img/comment-3.jpg";

function Comments() {
  return (
    <section className={styles.container}>
      <h1 className="section-heading">User Comments</h1>
      <div className={styles.contentWrapper}>
        <div id="comment-user" className="carousel slide" data-ride="carousel">
          <div className={`carousel-indicators ${styles.indicators}`}>
            <div
              className={`img-info ${styles.imgInfo}`}
              data-target="#comment-user"
              data-slide-to={0}
            >
              <img src={img1} alt="name" />
            </div>
            <div
              className={`img-info ${styles.imgInfo}`}
              data-target="#comment-user"
              data-slide-to={1}
            >
              <img src={img2} alt="name" />
            </div>
            <div
              className={`img-info ${styles.imgInfo}`}
              data-target="#comment-user"
              data-slide-to={2}
            >
              <img src={img3} alt="name" />
            </div>
          </div>
          <div className={`carousel-inner ${styles.carouselInner}`}>
            <div className="carousel-item active">
              <div className={styles.textContent}>
                “ Less is more applies to eLearning too. More content, more
                flashy technology, and more ideas stuffed into a single
                presentation is a sure recipe for disaster. Instead of drowning
                students in a sea of content, why not keep stick to one idea and
                help them understand it deeply?. ”
              </div>
              <div className={styles.userInfo}>
                <p>
                  _Jack, <span>CEO</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className={styles.textContent}>
                “ Less is more applies to eLearning too. More content, more
                flashy technology, and more ideas stuffed into a single
                presentation is a sure recipe for disaster. Instead of drowning
                students in a sea of content, why not keep stick to one idea and
                help them understand it deeply?. ”
              </div>
              <div className={styles.userInfo}>
                <p>
                  _Long Black, <span>Developer</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className={styles.textContent}>
                “ Less is more applies to eLearning too. More content, more
                flashy technology, and more ideas stuffed into a single
                presentation is a sure recipe for disaster. Instead of drowning
                students in a sea of content, why not keep stick to one idea and
                help them understand it deeply?. ”
              </div>
              <div className={styles.userInfo}>
                <p>
                  _Jenny Kita, <span>Office Worker</span>
                </p>
              </div>
            </div>
          </div>
          <a
            className={`carousel-control-prev ${styles.prev}`}
            href="#comment-user"
            role="button"
            data-slide="prev"
          >
            <span>{"<"}</span>
          </a>
          <a
            className={`carousel-control-next ${styles.next}`}
            href="#comment-user"
            role="button"
            data-slide="next"
          >
            <span>{">"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Comments;
