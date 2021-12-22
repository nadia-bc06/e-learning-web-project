import React from "react";
import styles from "./Banner.module.css";
import bannerImg from "./../../assets/img/banner.jpg";
import Button from "../Button/Button";

function Banner() {
  return (
    <section className={styles.container}  style={{ backgroundImage: `url(${bannerImg})`}}>
      <div className={styles.overlay}></div>
      <div className={styles.contentWrapper}>
          <h1 className="section-heading">
            Getting started with <b>E-EDU</b>
          </h1>
          <p className={styles.description}>
            We pride ourselves on providing the most up-to-date content for
            <br />
            our students to learn each course
          </p>
          <div className={`${styles.searchGroup}`}>
            <div className={styles.searchInput}>
              <input
                type="text"
                placeholder="What course are you looking for?"
                className="form-control"
                // onKeyUp={this.handleOnChange}
              ></input>
              {/* <div className="content-search">{this.renderContenSearch()}</div> */}
            </div>
            {/* <NavLink to={`/home/courses/all?${this.state.keyword}`} className="btn--purple bttn">
                        SEARCH
                    </NavLink> */}
                    <Button large secondary2>Search</Button>
          </div>
      </div>
      {/* <div className="arrow-down" onClick={this.scrollDown}>
            <span></span>
            <span></span>
            <span></span>
        </div> */}
    </section>
  );
}

export default Banner;
