import React, { Component } from "react";
import styles from "./AccountInfo.module.scss";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { actUpdateAccountInfo } from "../../../store/actions/actions";

export class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        maNhom: "",
        email: "",
      },
      errors: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        maNhom: "",
        email: "",
      },
      valids: {
        taiKhoan: false,
        matKhau: false,
        hoTen: false,
        soDT: false,
        maLoaiNguoiDung: false,
        maNhom: false,
        email: false,
        form: false,
      },
    };
  }

  handleEdit = () => {
    let inputElements = document.querySelectorAll(".form-control");
    inputElements.forEach((ele) => ele.removeAttribute("disabled"));
    let { taiKhoan, matKhau, email, hoTen, soDT, maLoaiNguoiDung, maNhom } =
      this.props.accountInfo;
    this.setState({
      values: {
        taiKhoan,
        matKhau,
        email,
        hoTen,
        soDT,
        maLoaiNguoiDung,
        maNhom,
      },
    });
  };
  handleOnChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  getParent = (element, selector) => {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  };

  handleErrors = (e) => {
    //get element to render error message
    let inputEle = e.target;
    let parentEle = this.getParent(inputEle, ".form-group");
    let errorEle = parentEle.querySelector(".form-message");

    let { name, value } = e.target;
    let { errors, valids } = this.state;
    let isValid = false;
    let message = value === "" ? "This field must be filled" : "";
    isValid = message !== "" ? false : true;
    if (value !== "") {
      switch (name) {
        case "hoTen":
          if (
            !value.match(
              "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
            )
          ) {
            isValid = false;
            message = "Invalid value";
          }
          break;
        case "email":
          if (
            !value.match(
              "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
                "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
            )
          ) {
            isValid = false;
            message = "Invalid value";
          }
          break;
        case "taiKhoan":
          if (value.length < 4 || value.length > 15) {
            isValid = false;
            message = "Input 4 to 15 characters";
          } else if (!value.match("^[a-z0-9_-]{3,16}$")) {
            isValid = false;
            message = "Invalid value";
          }
          break;
        case "matKhau":
          if (value.length < 6) {
            isValid = false;
            message = "Password must have at least 6 characters";
          } else if (!value.match("^[a-zA-Z0-9]+$")) {
            isValid = false;
            message = "Invalid value";
          }
          break;
        case "soDT":
          if (!value.match("^[0-9]*$")) {
            isValid = false;
            message = "Invalid Value";
          }
          break;
        default:
          break;
      }
    }
    // render error message
    if (message) {
      errorEle.innerText = message;
      parentEle.classList.add("invalid");
    } else {
      errorEle.innerText = "";
      parentEle.classList.remove("invalid");
    }
    e.target.oninput = () => {
      errorEle.innerText = "";
      parentEle.classList.remove("invalid");
    };
    this.setState(
      {
        errors: { ...errors, [name]: message },
        valids: { ...valids, [name]: isValid },
      },
      () => {
        this.handleFormValidate();
      }
    );
  };

  handleFormValidate = () =>{
    let { valids } = this.state;
    this.setState({
      valids : {
        ...valids,
        form: valids.taiKhoan && valids.matKhau && valids.hoTen && valids.soDT && valids.email,
      }
    })
  }
  
  handleSave = () =>{
    if(this.state.values.taiKhoan=== ""&&
    this.state.values.matKhau=== ""&&
    this.state.values.hoTen=== ""&&
    this.state.values.soDT=== ""&&
    this.state.values.maLoaiNguoiDung=== ""&&
    this.state.values.maNhom=== ""&&
    this.state.values.email=== "")
    {
      let message = "Bạn chưa chỉnh sửa thông tin";
      Swal.fire({
        position: 'center',
        icon: 'error',
        html: `<h3 style="color:#f27474"><b>ERROR!</b></h3><b>${message}</b>`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    else{
      this.props.onUpdateInfo(this.state.values);
      let inputElements = document.querySelectorAll(".form-control");
      inputElements.forEach((ele) => ele.setAttribute("disabled", true));
    }
    
  }

  render() {
    const { taiKhoan, matKhau, email, hoTen, soDT } = this.props.accountInfo;
    return (
      <div className={`form ${styles.infoForm}`}>
        <h3 className="heading">Your account info</h3>
        <div className="spacer" />

        <div className={`form-group ${styles.formGroup}`}>
          <label
            htmlFor="fullname"
            className={`form-label ${styles.formLabel}`}
          >
            Full Name
          </label>
          <input
            id="fullname"
            name="hoTen"
            type="text"
            placeholder="Enter your full name"
            className="form-control"
            disabled
            onChange={this.handleOnChange}
            defaultValue={hoTen}
            onBlur={this.handleErrors}
          />
          <span className="form-message" />
        </div>
        <div className={`form-group ${styles.formGroup}`}>
          <label htmlFor="email" className={`form-label ${styles.formLabel}`}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder={"Enter your email"}
            className="form-control"
            onChange={this.handleOnChange}
            defaultValue={email}
            disabled
            onBlur={this.handleErrors}
          />
          <span className="form-message" />
        </div>
        <div className={`form-group ${styles.formGroup}`}>
          <label htmlFor="account" className={`form-label ${styles.formLabel}`}>
            Account
          </label>
          <input
            id="account"
            name="taiKhoan"
            type="text"
            placeholder="Enter your account name"
            className="form-control"
            disabled
            onChange={this.handleOnChange}
            defaultValue={taiKhoan}
            onBlur={this.handleErrors}
          />
          <span className="form-message" />
        </div>

        <div className={`form-group ${styles.formGroup}`}>
          <label
            htmlFor="password"
            className={`form-label ${styles.formLabel}`}
          >
            Password
          </label>

          <input
            id="password"
            name="matKhau"
            type="password"
            placeholder="Enter your password"
            className="form-control"
            disabled
            onChange={this.handleOnChange}
            defaultValue={matKhau}
            onBlur={this.handleErrors}
          />

          <span className="form-message"></span>
        </div>

        <div className={`form-group ${styles.formGroup}`}>
          <label htmlFor="tel" className={`form-label ${styles.formLabel}`}>
            Tel
          </label>
          <input
            id="tel"
            name="soDT"
            type="text"
            placeholder="Enter your telephone number"
            className="form-control"
            disabled
            onChange={this.handleOnChange}
            defaultValue={soDT}
            onBlur={this.handleErrors}
          />
          <span className="form-message" />
        </div>

        <div className={styles.btnGroup}>
          <button
            className={`form-submit ${styles.btn}`}
            onClick={this.handleEdit}
          >
            Change info
          </button>

          <button className={`form-submit ${styles.btn}`} onClick={this.handleSave}>Save</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return {

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onUpdateInfo: (data) => {
            dispatch(actUpdateAccountInfo(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
