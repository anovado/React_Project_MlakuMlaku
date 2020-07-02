import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/userAction";

class Profile extends Component {
  goHome = () => {
    this.props.history.push("/");
  };

  logOut = async () => {
    // console.warn("cek propslogout", this.props);
    await this.props.logoutUser();
    this.props.history.push("/signin");
  };

  render() {
    if (!this.props.dataUser.login_status) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: "Anda harus login terlebih dahulu!" },
          }}
        />
      );
    } else {
      return (
        <React.Fragment>
          <div className="page-wrapper bg-gra-02 profile font-poppins">
            <div className="card-container">
              <span className="pro">PRO</span>
              <img src={this.props.dataUser.avatar} alt="user" />
              <h3>{this.props.dataUser.name}</h3>
              <h6>{this.props.dataUser.city}</h6>
              <p>{this.props.dataUser.job}</p>
              <div className="buttons mb-5">
                <button className="primary" onClick={this.goHome}>
                  Home
                </button>
                <button className="primary ghost" onClick={this.logOut}>
                  Logout
                </button>
              </div>
              {/* <div className="skills">
        <h6>Skills</h6>
        <ul>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MySQL</li>
          <li>Django</li>
          <li>Rest API</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div> */}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};
const mapDispatchToProps = {
  logoutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
