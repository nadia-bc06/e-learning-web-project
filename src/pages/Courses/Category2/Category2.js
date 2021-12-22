import styles from "./Category2.module.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Category2 extends Component {
  renderCategory = (category) => {
    let result = null;
    if (category) {
      result = category.map((item, index) => {
        return (
          <li className={styles.categoryItem} key={index}>
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#694a99" : "",
                  color: isActive ? "white" : ""
                };
              }}
              className={styles.categoryItemLink}
              to={`${item.maDanhMuc}`}
              onClick={() => this.props.getCategoryCode(item.maDanhMuc)}
            >
              {item.tenDanhMuc}
            </NavLink>
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
        <li className={styles.categoryItem}>
          <NavLink
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#694a99" : "",
                  color: isActive ? "white" : ""
              };
            }}
            className={styles.categoryItemLink}
            to="/courses/all"
            onClick={() => this.props.getCategoryCode()}
          >
            All courses
          </NavLink>
        </li>
        {this.renderCategory(category)}
      </>
    );
  }
}

export default Category2;
