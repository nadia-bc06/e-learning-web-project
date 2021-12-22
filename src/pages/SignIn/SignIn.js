import React, { Component } from "react";
import styles from "./SignIn.module.css";
import bgImg from "./../../assets/img/not-found-bg.jpg";
import { Link } from "react-router-dom";
import * as actions from "./../../store/actions/actions";
import { connect } from "react-redux";
import withUseNavigateHook from "../../components/hooks/useNavigateHook";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }

  componentDidMount = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  handleOnChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSignIn(this.state, this.props.navigate);
  };

  render() {
    const { taiKhoan, matKhau } = this.state;
    return (
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className={styles.mainContent}>
          <form className={`form ${styles.form}`} id="signInForm">
            <h3 className="heading">Sign In</h3>
            <div className="spacer" />

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
              />

              <span className="form-message"></span>
            </div>

            <button className="form-submit" onClick={this.handleOnSubmit}>
              Sign In
            </button>
            <br />
            <Link to="/sign-up" className="question-txt">
              You haven't got an account?
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (data, navigate) => {
      dispatch(actions.actSignIn(data, navigate));
    },
  };
};

export default withUseNavigateHook(connect(null, mapDispatchToProps)(SignIn));
