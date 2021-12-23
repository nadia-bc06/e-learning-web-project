import React, {Component} from "react";
import styles from "./UserProfile.module.scss";
import defautlImg from "./../../assets/img/avata.jpg";

import AccountInfo from "./AccountInfo/AccountInfo";
import { connect } from "react-redux";
import { actGetAccountInfo } from "../../store/actions/actions";

export class UserProfile extends Component {
    componentDidMount = () =>{
        this.props.onGetAccountInfo();
    }
    render() {
        const {accountInfo} = this.props;
      
        return (
            <div className={styles.container}>
              <div
                className={styles.wrapper}
               
              >
                <div className="row">
                  <div className="col col-4">
                    <div className={`card ${styles.avataForm}`}>
                      <div className={styles.avataWrapper}>
                        <img className={styles.avataImg} src={defautlImg} alt="avata" />
                        <h5 className={styles.avataName}>{this.props.accountInfo.hoTen}</h5>
                      </div>
                      <div className={`card-body ${styles.optionList}`}>
                        <li className={`form-submit ${styles.optionItem}`}>
                          Account Info
                        </li>
        
                        <li className={`form-submit ${styles.optionItem}`}>
                          Cart Info
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="col col-8">
                    <AccountInfo accountInfo={accountInfo}/>
                  </div>
                </div>
              </div>
            </div>
          );
    }

}

const mapStateToProps = state => {
    return {
        accountInfo: state.userReducer.accountInfo
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onGetAccountInfo: () =>{
            dispatch(actGetAccountInfo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
