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
    localStorage.setItem('loginInfo', JSON.stringify(data))
    callApi("QuanLyNguoiDung/DangNhap", "POST", data)
      .then((res) => {
        successApi("Sign in success").then(() => {
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/");
        });
      })
      .catch((err) => {
        errorApi(err);
        console.log(err);
      });
  };
};

export const actSignOut = () => {
  successApi("Sign out successfully");
  return (dispatch) => {
    dispatch({
      types: types.LOGOUT_ACCOUNT,
      data: {},
    });
  };
};

export const actGetAccountInfo = () =>{
  const user = JSON.parse(localStorage.getItem('user'));
  if(user){
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'))
    return dispatch => {
      callApi('QuanLyNguoiDung/ThongTinNguoiDung', 'POST' , loginInfo, {
        Authorization: `Bearer ${user.accessToken}`,
      })
        .then(res => {
          dispatch({
            type: types.GET_ACCOUNT_INFO,
            data: res.data
          })
        })
    } 
  }else return dispatch => {}
}

export const actUpdateAccountInfo = (data) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return () =>{
    callApi('QuanLyNguoiDung/CapNhatThongTinNguoiDung', 'PUT', data, {
      Authorization: `Bearer ${user.accessToken}`,
    } )
      .then(res => {
        successApi('Info Updated Successfully');
      })
      .catch(err => {
        errorApi(err)
      })
  } 
}