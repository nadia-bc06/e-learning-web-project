import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "../CategoryItem/CategoryItem";
import * as actions from "./../../store/actions/actions";
import styles from './Category.module.css'

class Category extends Component {

  componentDidMount() {
    this.props.getCategoryList();
  }
  renderCategoryHTML = () => {
    const {courseCategoryList } = this.props;
    if (courseCategoryList.length) {
      return courseCategoryList.map((item, index) => (
        <CategoryItem key={index} index={index} category={item} />
      ));
    }
  };
  render() {
    return (
      <section className={styles.container}>
        <h1 className="section-heading">Our category</h1>
        <div className={`row ${styles.wrapper}`}>
            {this.renderCategoryHTML()}
          
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    courseCategoryList: state.courseReducer.courseCategoryList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryList: () => {
      dispatch(actions.actGetCourseCategoryAPI());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
