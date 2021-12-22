import styles from "./Category2.module.css";
import React, { Component } from "react";

export class Category2 extends Component {
  renderCategory = (category) => {
    let result = null;
    if (category) {
      result = category.map((item, index) => {
        return (
          <li
            className={styles.categoryItem}
            key={index}
            onClick={() => this.props.getCategoryCode(item.maDanhMuc)}
          >
            {item.tenDanhMuc}
          </li>
        );
      });
    }
    return result;
  };

  render() {
    const { category } = this.props;

    return (
      <>
        <li
          className={styles.categoryItem}
          onClick={() => this.props.getCategoryCode()}
        >
          All courses
        </li>
        {this.renderCategory(category)}
      </>
    );
  }
}




export default Category2;
