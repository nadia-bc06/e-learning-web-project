// import * as $ from 'jquery';
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/actions";
import { NavLink } from "react-router-dom";
import styles from "./CourseItem.module.css";
import Button from "../Button/Button";
// import Swal from 'sweetalert2';
class CourseItem extends Component {
  // componentDidMount() {
  // 	$(function() {
  // 		$('.HeartAnimation').click(function() {
  // 			$(this).toggleClass('animate');
  // 		});
  // 	});
  // }
  // addToCart = () => {
  // 	localStorage.getItem('user')
  // 		? this.props.addToCart(this.props)
  // 		: Swal.fire({
  // 				position: 'center',
  // 				icon: 'error',
  // 				html: `<h3 style="color:#f27474"><b>ERROR!</b></h3><b>VUI LÒNG ĐĂNG NHẬP</b>`,
  // 				showConfirmButton: false,
  // 				timer: 1500,
  // 		  });
  // };
  // renderAddToCart = () => {
  // 	return this.props.listCart.findIndex(item => {
  // 		return item.course.maKhoaHoc === this.props.course.maKhoaHoc;
  // 	}) === -1 ? (
  // 		<button className="btn--blue btnn" onClick={this.addToCart}>
  // 			THÊM GIỎ HÀNG
  // 		</button>
  // 	) : (
  // 		<NavLink className="btn--purple btnn" to="/home/detail-cart">
  // 			TỚI GIỎ HÀNG
  // 		</NavLink>
  // 	);
  // };
  // handleAddToCart = () => {
  // 	return this.props.courseOfUser ? (
  // 		this.props.courseOfUser.findIndex(item => {
  // 			return item.maKhoaHoc === this.props.course.maKhoaHoc;
  // 		}) === -1 ? (
  // 			this.renderAddToCart()
  // 		) : (
  // 			<NavLink className="btn--black btnn" to="/home/profile">
  // 				TỚI HỒ SƠ CÁ NHÂN
  // 			</NavLink>
  // 		)
  // 	) : (
  // 		this.renderAddToCart()
  // 	);
  // };
  render() {
    let { course } = this.props;
    return (
      <div className={styles.container}>
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
const mapStateToProps = (state) => {
  return {
    // listCart: state.GioHangReducer.listCart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // addToCart: product => {
    // 	dispatch(actions.actAddToCart(product));
    // },
    // getInfoAccount: () => {
    // 	dispatch(actions.actGetInfoAccount());
    // },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseItem);
