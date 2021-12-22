import * as actions from "./../../store/actions/actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import CourseItem from "../CourseItem/CourseItem";
import styles from "./CourseList.module.css";
import Button from "../Button/Button";
import * as $ from "jquery";

class ListCourse extends Component {
  componentDidMount() {
    this.props.getCourseList();
    // this.props.getInfoAccount();
  }
  componentDidUpdate() {
    $(document).ready(this.efflectLoadCourse());
  }
  renderListCourse = () => {
    let { courseList } = this.props;
    console.log(courseList);
    if (courseList.length) {
      return courseList.slice(0, 6).map((item, index) => {
        return (
          <div className={`courseItem col col-lg-4 col-md-6 col-sm-12 ${styles.courseItem}`}>
            <CourseItem
              key={index}
              course={item}
              // courseOfUser={accountInfo ? accountInfo.chiTietKhoaHocGhiDanh : ''}
            />
          </div>
        );
      });
    }
  };
  efflectLoadCourse = () => {
    let lengthItemCourse = $(".courseItem").length;
    let x = 3;
    $("#showLess").hide();
    $(".courseItem:lt(" +  (lengthItemCourse - x) + ")").hide();
    $("#loadMore").click(() => {
      x = x + 3 <= lengthItemCourse ? x + 3 : lengthItemCourse;
      $(".courseItem:lt(" + x + ")").slideDown();
      $(".courseItem:lt(" + lengthItemCourse + ")").show("slow");
      $("#showLess").show();
      x === lengthItemCourse ? $("#loadMore").hide() : $("#loadMore").show();
    });
    $("#showLess").click(() => {
      x = x - 3 <= 0 ? 3 : x - 3;
      $(".courseItem")
        .not(":lt(" + 3 + ")")
        .slideUp();
      $(".courseItem")
        .not(":lt(" + 3 + ")")
        .hide("slow");
      window.scroll({
        top: $(".courseList").offset().top - 50,
        left: 0,
        behavior: "smooth",
      });
      $("#showLess").hide();
      $("#loadMore").show();
    });
  };
  render() {
    return (
      <section className={`courseList ${styles.container}`}>
        <h1 className="section-heading">Our Top Courses</h1>
        <p className={styles.subtitle}>
          Join over 200 instructors who use Teachable to share their knowledge.
          <br /> Easily register for an online course
        </p>
        <div className={styles.content}>
          <div className={`row ${styles.listWrapper}`}>
            {this.renderListCourse()}
          </div>
          <div className={styles.btnGroup}>
            <span id="loadMore">
              <Button large outline2>
                SHOWN MORE <i className="fa fa-angle-double-down"></i>
              </Button>
            </span>
            <span id="showLess">
              <Button large outline2>
                SHOWN LESS <i className="fa fa-angle-double-up"></i>
              </Button>
            </span>
            <NavLink to="/home/courses/all" className="ml-3">
              <Button large secondary2>
                SHOWN ALL<i className="fa fa-angle-double-right"></i>
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateTopProps = (state) => {
  return {
    courseList: state.courseReducer.courseList,
    // accountInfo: state.NguoiDungReducer.accountInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCourseList: () => {
      dispatch(actions.actGetCourseListAPI());
    },
    // getInfoAccount: () => {
    // 	dispatch(actions.actGetInfoAccount());
    // },
  };
};
export default connect(mapStateTopProps, mapDispatchToProps)(ListCourse);
