import * as types from "./../../constants/actionTypes";
import callApi from "../../utils/apiCaller";
import Swal from "sweetalert2";

const successApi = (strSuccess) => {
  return Swal.fire({
    position: "center",
    icon: "success",
    html: `<h3 style="color:#a5dc86"><b>SUCCESS!</b></h3><b>${strSuccess}</b>`,
    showConfirmButton: false,
    timer: 1500,
  });
};

const errorApi = (err) => {
  return Swal.fire({
    position: "center",
    icon: "error",
    html: `<h3 style="color:#f27474"><b>ERROR!</b></h3><b>${err}</b>`,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const actGetCourseCategoryAPI = () => {
  return (dispatch) => {
    return callApi("QuanLyKhoaHoc/LayDanhMucKhoaHoc").then((res) => {
      if (res) {
        dispatch({
          type: types.GET_COURSE_CATEGORY,
          courseCategoryList: res.data,
        });
      }
    });
  };
};

export const actGetCourseListAPI = () => {
  return (dispatch) => {
    callApi("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01").then((res) => {
      let courseList = [];
      if (res && res.data) {
        courseList = res.data.map((item) => ({
          ...item,
          fee:
            Math.floor(Math.random() * (Math.floor(100) - Math.ceil(50))) +
            Math.ceil(50),
        }));
      }
      dispatch({
        type: types.GET_COURSE_LIST,
        courseList,
      });
    });
  };
};

export const actGetCoursesByCategory = (categoryCode) => {
  return (dispatch) => {
    callApi(
      `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categoryCode}&MaNhom=GP01`
    ).then((res) => {
      let courseByCategory = [];
      if (res && res.data) {
        courseByCategory = res.data.map((item) => ({
          ...item,
          fee:
            Math.floor(Math.random() * (Math.floor(100) - Math.ceil(50))) +
            Math.ceil(50),
        }));
      }
      dispatch({
        type: types.GET_COURSE_BY_CATEGORY,
        courseByCategory,
      });
    });
  };
};

export const actSignUp = (data, navigate) => {
  return () => {
    callApi("QuanLyNguoiDung/DangKy", "POST", { ...data, maNhom: "GP01" })
      .then((res) => {
        console.log(res);
        successApi("Sign up success!").then(() => {
          navigate("/sign-in");
        });
      })
      .catch((err) => {
        errorApi(err);
      });
  };
};

export const actSignIn = (data, navigate) => {
  return () => {
    callApi("QuanLyNguoiDung/DangNhap", "POST", data)
      .then((res) => {
        console.log(res)
        successApi("Sign in success").then(() => {
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/");
        });
      })
      .catch((err) => {
        errorApi(err);
        console.log(err)
      });
  };
};
