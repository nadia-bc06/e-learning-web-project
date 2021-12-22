import React, { Component } from "react";
import styles from "./SignUp.module.css";
import bgImg from "./../../assets/img/not-found-bg.jpg";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import * as actions from './../../store/actions/actions'
import { connect } from "react-redux";
import withUseNavigateHook from "../../components/hooks/useNavigateHook";


export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        taiKhoan: '',
				matKhau: '',
				hoTen: '',
				soDT: '',
				email: '',
      },
      errors: {
        taiKhoan: '',
				matKhau: '',
				hoTen: '',
				soDT: '',
				email: '',
      },
      valids: {
        taiKhoan: false,
				matKhau: false,
				hoTen: false,
				soDT: false,
				email: false,
				form: false,
      },
    };
  }

  componentDidMount = () =>{
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  }

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
        
          if (!value.match('^[0-9]*$')) {
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
    this.setState({
      errors: { ...errors, [name]: message },
      valids: { ...valids, [name]: isValid },
    },
    () => {
      this.handleFormValidate();
    }
    );
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

  handleFormValidate = () =>{
    let { valids } = this.state;
    this.setState({
      valids : {
        ...valids,
        form: valids.taiKhoan && valids.matKhau && valids.hoTen && valids.soDT && valids.email,
      }
    })
  }

  handleOnSubMit = (e ) => {
    e.preventDefault();
    if(this.state.valids.form){
      this.props.onSignUp(this.state.values , this.props.navigate);
    }else{
      Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please check your info!',
			});
    }
  };
  
  // navigate = useNavigate(); 
  
   render() {
    const {
      taiKhoan,
				matKhau,
				hoTen,
				soDT,
				email,
    } = this.state.values;

    return (
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className={styles.mainContent}>
          <form className={`form ${styles.form}`} id="signInForm">
            <h3 className="heading">Sign Up</h3>
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
                onChange={this.handleOnChange}
                value={hoTen}
                onBlur={this.handleErrors}
              />
              <span className="form-message" />
            </div>
            <div className={`form-group ${styles.formGroup}`}>
              <label
                htmlFor="email"
                className={`form-label ${styles.formLabel}`}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder={"Enter your email"}
                className="form-control"
                onChange={this.handleOnChange}
                value={email}
                onBlur={this.handleErrors}
              />
              <span className="form-message" />
            </div>
            <div className={`form-group ${styles.formGroup}`}>
              <label
                htmlFor="account"
                className={`form-label ${styles.formLabel}`}
              >
                Account
              </label>
              <input
                id="account"
                name="taiKhoan"
                type="text"
                placeholder="Enter your account name"
                className="form-control"
                onChange={this.handleOnChange}
                value={taiKhoan}
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
                onChange={this.handleOnChange}
                value={matKhau}
                onBlur={this.handleErrors}
              />

              <span className="form-message"></span>
            </div>

            <div className={`form-group ${styles.formGroup}`}>
              <label
                htmlFor="tel"
                className={`form-label ${styles.formLabel}`}
              >
                Tel
              </label>
              <input
                id="tel"
                name="soDT"
                type="text"
                placeholder="Enter your telephone number"
                className="form-control"
                onChange={this.handleOnChange}
                value={soDT}
                onBlur={this.handleErrors}
              />
              <span className="form-message" />
            </div>

            <button className="form-submit" onClick={this.handleOnSubMit} >
              Sign Up
            </button>
            <br />
            <Link to="/sign-in" className="question-txt" >
              {" "}
              Already have an account? Sign In!
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUp : (data , navigate ) =>{
      dispatch(actions.actSignUp(data , navigate));
    }
  }
}
 
export default withUseNavigateHook(connect(null, mapDispatchToProps)(SignUp));
