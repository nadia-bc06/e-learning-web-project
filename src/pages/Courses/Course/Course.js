import React, { Component } from "react";
import styles from "./Course.module.css"
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button";

export class Course extends Component {
    
  render() {
      // console.log(this.props.course)
      const {course} = this.props;
    return (
        <div className={`col col-lg-4 col-md-6 ${styles.container}`}>
        <div className={` ${styles.imgWrapper1}`}>
          <div className={styles.imgWrapper2}>
            <div className={styles.overlay}>
              <h3 className={styles.courseName}>{course.tenKhoaHoc}</h3>
              <p className={styles.categoryName}>
                {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
              </p>
            </div>
            <img
              className="card-img-top"
              src={course.hinhAnh}
              alt={course.tenKhoaHoc}
            />
            <div className={styles.detailContainer}>
              <div className={styles.detailWrapper}>
                <p className={styles.dateTxt}>Created Date: {course.ngayTao}</p>
                <h3 className={styles.courseNameTxt}>{course.tenKhoaHoc}</h3>
                <p className={styles.categoryNameTxt}>
                  {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                </p>
                <div className={`d-flex justify-content-between pr-3  `}>
                  <div
                    className={`d-flex align-items-center ${styles.instructorInfo}`}
                  >
                    <div className={styles.instructorAvatar}>
                      <i class="fas fa-user"></i>
                    </div>
                    <div className={styles.instructorName}>
                      <small>Instructor</small>
                      <p>{course.nguoiTao.hoTen}</p>
                    </div>
                  </div>
                  <p className={styles.fee}>${course.fee}</p>
                </div>
                <div className={styles.review}>
                  <i className="fa fa-eye"></i> {course.luotXem} |{" "}
                  <i className="fa fa-mortar-board"></i>
                  {course.soLuongHocVien} | <i className="fa fa-heart"></i> 99
                </div>
                <p className={styles.descriptionTxt}>{course.moTa}</p>
                <div className="btn-group">
                  <NavLink className="mr-2"
                    to={`/home/detail-course/${course.maKhoaHoc}?${course.fee}`}
                  >
                    {" "}
                    <Button outline small> DETAILS</Button>
                  </NavLink>

                  <Button small >ADD TO CART</Button>
                  {/* {this.handleAddToCart()} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
