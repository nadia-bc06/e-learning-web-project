import React from "react";
import { NavLink } from "react-router-dom";
import categoryImg1 from "./../../assets/img/category1.jpg";
import categoryImg2 from "./../../assets/img/category2.jpg";
import categoryImg3 from "./../../assets/img/category3.jpg";
import categoryImg4 from "./../../assets/img/category4.jpg";
import categoryImg5 from "./../../assets/img/category5.jpg";
import categoryImg6 from "./../../assets/img/category6.jpg";
import styles from "./CategoryItem.module.css";

export default function CategoryItem(props) {
  const images = [
    categoryImg1,
    categoryImg2,
    categoryImg3,
    categoryImg4,
    categoryImg5,
    categoryImg6,
  ];

  const { index, category } = props;
  return (
    <NavLink className={`col col-lg-2 col-md-4 col-sm-6 ${styles.link}`} to={`/courses/${category.maDanhMuc}`}>
      <div
        className={`card ${styles.container}`}
        // style={{ width: "18rem" }}
      >
        <div className={styles.imgWrapper}>
          <img
            className={`card-img-top ${styles.itemImg}`}
            src={images[index]}
            alt="img-category"
          />
        </div>
        <div className={`card-body ${styles.content}`}>
          <p className={styles.name}>{category.tenDanhMuc}</p>
        </div>
      </div>
    </NavLink>
  );
}
