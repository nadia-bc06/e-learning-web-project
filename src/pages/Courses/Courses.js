import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/actions";
import Course from "./Course/Course";
import styles from "./Courses.module.css";
import { Category2 } from "./Category2/Category2";
import Button from "../../components/Button/Button";

export class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursesArr: [],
      searchResult: [],
      keyword: "",
    };
  }
  componentDidMount = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    this.props.getCategoryList();
    this.props.getCourseList();
  };

  static getDerivedStateFromProps(props, state) {
    if (state.coursesArr.length === 0) {
      return {
        coursesArr: props.courses,
      };
    }
  }

  getCategoryCode = (categoryCode) => {
    this.setState({
      searchResult: [],
    });
    let coursesArr = this.props.courses.filter((item) => {
      return item.danhMucKhoaHoc.maDanhMucKhoahoc === categoryCode;
    });
    if (!categoryCode) {
      this.setState({
        coursesArr: this.props.courses,
      });
    } else {
      this.setState({
        coursesArr,
      });
    }
  };

  renderCourse = (courses) => {
    var result = null;
    if (courses.length > 0) {
      result = courses.map((course, index) => {
        return <Course course={course} key={index} />;
      });
    }
    return result;
  };

  compareName = (type) => {
    return (a , b) => {
      a = a.tenKhoaHoc.toUpperCase();
      b = b.tenKhoaHoc.toUpperCase();
      let comparison = 0;
      if(type === 1) {
        if(a > b){
          return comparison = 1
        } else if( a < b ) return comparison = -1;
      } else if(type === -1) {
        if(a > b){
          return comparison = -1
        } else if( a < b ) return comparison = 1;
      }
      return comparison
    }
  };

  sortName = (type) => {
    let { coursesArr , searchResult } = this.state;
    console.log(type)
    if(searchResult.length>0){
      searchResult.sort(this.compareName(type))
      this.setState({
        searchResult,
      })
    }else if(searchResult.length === 0){
      coursesArr.sort(this.compareName(type));
      this.setState({
        coursesArr
      });
    }
  };

  // compareIncreasePrice = (a , b) =>{
  //   const feeA = a.fee;
  //   const feeB = b.fee;
  //   let comparision;
  //   if(feeA - feeB > 0){
  //     comparision = 1;
  //   }else if( feeA - feeB < 0){
  //     comparision = -1;
  //   }
  //   return comparision;
  // }
  // compareDecreasePrice = (a , b) =>{
  //   const feeA = a.fee;
  //   const feeB = b.fee;
  //   let comparision;
  //   if(feeA - feeB > 0){
  //     comparision = -1;
  //   }else if( feeA - feeB < 0){
  //     comparision = 1;
  //   }
  //   return comparision;
  // }

  comparePrice = (type) => {
    return (a, b) => {
      a = a.fee;
      b = b.fee;
      if (type === 1) {
        return a - b;
      } else return b - a;
    };
  };

  sortPrice = (type) => {
    const { coursesArr } = this.state;
    coursesArr.sort(this.comparePrice(type));
    this.setState({
      coursesArr,
    });
  };

  // sortIncreasePrice = () =>{
  //   let {coursesArr} = this.state;
  //   coursesArr.sort(this.compareIncreasePrice);
  //   this.setState({
  //     coursesArr
  //   })
  // }
  // sortDecreasePrice = () =>{
  //   let {coursesArr} = this.state;
  //   coursesArr.sort(this.compareDecreasePrice);
  //   this.setState({
  //     coursesArr
  //   })
  // }

  onChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSearch = (e) => {
    e.preventDefault();
    let { keyword, coursesArr } = this.state;
    let result = [];
    if (keyword) {
      result = coursesArr.filter((item) => {
        return (
          item.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        );
      });
      console.log(result);
      this.setState({
        searchResult: result,
      });
    }
  };

  render() {
    let courses = [];
    const { courseCategoryList } = this.props;
    const { coursesArr, searchResult } = this.state;
    if (searchResult.length > 0) {
      courses = searchResult;
    } else {
      courses = coursesArr;
    }
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={`row ${styles.mainContent}`}>
            <div
              className={`col col-lg-3 col-md-0 col-sm-0 ${styles.categoryWrapper}`}
            >
              <nav className={styles.category}>
                <h3 className={styles.categoryHeading}>Category</h3>
                <ul className={styles.categoryList}>
                  <Category2
                    category={courseCategoryList}
                    getCategoryCode={this.getCategoryCode}
                  />
                </ul>
              </nav>
            </div>
            <div className="col col-lg-9 col-md-12 col-sm-12">
              <div className="row" style={{ marginTop: "2rem" }}>
                <div
                  className={`col col-6 home-filter hide-on-mobile-tablet ${styles.filter}`}
                >
                  <span className={`home-filter__label ${styles.filterLabel}`}>
                    Sort by
                  </span>

                  <div className={styles.filterSelect}>
                    <span className={styles.filterType}>
                      Name
                      <i className={`${styles.filterIcon} fas fa-angle-down`} />
                    </span>
                    <ul className={styles.filterList}>
                      <li
                        className={styles.filterItem}
                        onClick={() => this.sortName(1)}
                      >
                        A to Z
                      </li>
                      <li
                        className={styles.filterItem}
                        onClick={() => this.sortName(-1)}
                      >
                        Z to A
                      </li>
                    </ul>
                  </div>

                  <div className={styles.filterSelect}>
                    <span className={styles.filterType}>
                      Price
                      <i className={`${styles.filterIcon} fas fa-angle-down`} />
                    </span>
                    <ul className={styles.filterList}>
                      <li
                        className={styles.filterItem}
                        onClick={() => this.sortPrice(1)}
                      >
                        Low to High
                      </li>
                      <li
                        className={styles.filterItem}
                        onClick={() => this.sortPrice(-1)}
                      >
                        High to Low
                      </li>
                    </ul>
                  </div>
                  {/* <div className="div home-filter__pagination">
                  <span className="home-filter__page-num">
                    <span className="home-filter__page-current">1</span>/
                    <span className="home-filter__page-total">14</span>
                  </span>
                  <div className="home-filter__page-control">
                    <a
                      href
                      className="
                      home-filter__page-btn home-filter__page-btn--disabled
                    "
                    >
                      <i className="home-filter__page-icon fas fa-angle-left" />
                    </a>
                    <a href className="home-filter__page-btn">
                      <i className="home-filter__page-icon fas fa-angle-right" />
                    </a>
                  </div>
                </div> */}
                </div>

                <div className={`col col-6  ${styles.search}`}>
                  <form className={`form-inline`}>
                    <input
                      className="form-control mr-2"
                      type="search"
                      name="keyword"
                      onChange={this.onChange}
                      value={this.state.keyword}
                      placeholder="Search for courses"
                      aria-label="Search"
                    />
                    <span onClick={this.onSearch}>
                      <Button secondary2>Search</Button>
                    </span>
                  </form>
                </div>
              </div>

              {/* <nav className="mobile-category">
                <ul className="mobile-category__list">
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">
                      Dụng cụ &amp; thiết bị tiện ích Dụng cụ &amp; thiết bị
                      tiện ích Dụng cụ &amp; thiết bị tiện ích Dụng cụ &amp;
                      thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">
                      Dụng cụ &amp; thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">
                      Dụng cụ &amp; thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">
                      Dụng cụ &amp; thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">
                      Dụng cụ &amp; thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href className="mobile-category__link">
                      Dụng cụ &amp; thiết bị tiện ích
                    </a>
                  </li>
                </ul>
              </nav> */}
              <div className={`${styles.courseWrapper}`}>
                <div className="row" style={{ margin: "0px -20px" }}>
                  {this.renderCourse(courses)}
                </div>
              </div>
              <ul className="pagination home-product__pagination">
                <li className="pagination-item">
                  <a href className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-left"> </i>
                  </a>
                </li>
                <li className="pagination-item pagination-item--active">
                  <a href className="pagination-item__link">
                    {"{"}" "{"}"}1{"{"}" "{"}"}
                  </a>
                </li>
                <li className="pagination-item">
                  <a href className="pagination-item__link">
                    {"{"}" "{"}"}2{"{"}" "{"}"}
                  </a>
                </li>
                <li className="pagination-item">
                  <a href className="pagination-item__link">
                    {"{"}" "{"}"}
                    ...{"{"}" "{"}"}
                  </a>
                </li>
                <li className="pagination-item">
                  <a href className="pagination-item__link">
                    {"{"}" "{"}"}
                    14{"{"}" "{"}"}
                  </a>
                </li>
                <li className="pagination-item">
                  <a href className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-right">
                      {" "}
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courseReducer.courseList,
    courseCategoryList: state.courseReducer.courseCategoryList,
    // courseByCategory: state.courseReducer.courseByCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCourseList: () => {
      dispatch(actions.actGetCourseListAPI());
    },
    getCategoryList: () => {
      dispatch(actions.actGetCourseCategoryAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
