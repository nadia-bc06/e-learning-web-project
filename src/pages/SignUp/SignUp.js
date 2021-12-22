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
        fullNameTxt: "",
        accountNameTxt: "",
        emailTxt: "",
        passwordTxt: "",
        confirmPasswordTxt: "",
      },
      errors: {
        fullNameTxt: "",
        accountNameTxt: "",
        emailTxt: "",
        passwordTxt: "",
        confirmPasswordTxt: "",
      },
      valids: {
        fullNameTxt: false,
        accountNameTxt: false,
        emailTxt: false,
        passwordTxt: false,
        confirmPasswordTxt: false,
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
        case "fullNameTxt":
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
        case "emailTxt":
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
        case "accountNameTxt":
          if (value.length < 4 || value.length > 15) {
            isValid = false;
            message = "Input 4 to 15 characters";
          } else if (!value.match("^[a-z0-9_-]{3,16}$")) {
            isValid = false;
            message = "Invalid value";
          }
          break;
        case "passwordTxt":
          if (value.length < 6) {
            isValid = false;
            message = "Password must have at least 6 characters";
          } else if (!value.match("^[a-zA-Z0-9]+$")) {
            isValid = false;
            message = "Invalid value";
          }
          break;
        case "confirmPasswordTxt":
          let confirmValue = document.querySelector(
            "input[name='passwordTxt']"
          ).value;
          if (value !== confirmValue) {
            isValid = false;
            message = "Confirmed password is not correct";
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
        form : valids.fullNameTxt && valids.emailTxt && valids.accountNameTxt && valids.passwordTxt && valids.confirmPasswordTxt,
      }
    })
  }

  handleOnSubMit = (e ) => {
    e.preventDefault();
    const navigate = this.props.navigate;

    if(this.state.valids.form){
      this.props.onSignUp(this.state.values);
      Swal.fire({
				icon: 'success',
				title: 'Congratulations',
				text: 'You have signed up successfully!',
        showConfirmButton: false,
        timer: 1500
			});
      navigate("/sign-in")
    } else {
       Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Check your info!',
        showConfirmButton: false,
        timer: 1500
			});
    }
  };
  
  // navigate = useNavigate(); 
  
   render() {
    const {
      fullNameTxt,
      accountNameTxt,
      emailTxt,
      passwordTxt,
      confirmPasswordTxt,
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
                name="fullNameTxt"
                type="text"
                placeholder="Enter your full name"
                className="form-control"
                onChange={this.handleOnChange}
                value={fullNameTxt}
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
                name="emailTxt"
                type="text"
                placeholder={"Enter your email"}
                className="form-control"
                onChange={this.handleOnChange}
                value={emailTxt}
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
                name="accountNameTxt"
                type="text"
                placeholder="Enter your account name"
                className="form-control"
                onChange={this.handleOnChange}
                value={accountNameTxt}
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
                name="passwordTxt"
                type="password"
                placeholder="Enter your password"
                className="form-control"
                onChange={this.handleOnChange}
                value={passwordTxt}
                onBlur={this.handleErrors}
              />

              <span className="form-message"></span>
            </div>

            <div className={`form-group ${styles.formGroup}`}>
              <label
                htmlFor="passwordConfirmation"
                className={`form-label ${styles.formLabel}`}
              >
                Confirm Password
              </label>
              <input
                id="confrimPassword"
                name="confirmPasswordTxt"
                type="password"
                placeholder="Enter your password again"
                className="form-control"
                onChange={this.handleOnChange}
                value={confirmPasswordTxt}
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
    onSignUp : (data ) =>{
      dispatch(actions.actSignUp(data ));
    }
  }
}
 
export default withUseNavigateHook(connect(null, mapDispatchToProps)(SignUp));
