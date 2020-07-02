import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/userAction";
import { Link } from "react-router-dom";

const ToolProfil = (props) => {
  const logOut = async () => {
    // console.warn("cek propslogout", this.props);
    await props.logoutUser();
    props.history.push("/signin");
  };
  return (
    <section>
      {console.log("testing", props.login)}
      {props.login ? (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mr-lg-5"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={props.dataUser.avatar}
                  style={{ borderRadius: "100px", width: "8vmin" }}
                />
              </a>
              <div
                className="dropdown-menu mr-lg-auto"
                aria-labelledby="navbarDropdown"
                style={{
                  marginLeft: "-10vmin",
                  background: "DarkSlateGray",
                  borderRadius: "10px",
                }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    src={props.dataUser.avatar}
                    style={{ borderRadius: "50px", width: "15vmin" }}
                  />
                </div>
                <span
                  class="badge badge-warning d-flex justify-content-center"
                  style={{ margin: "0 80px 0 80px" }}
                >
                  PRO
                </span>
                <Link
                  to="/profile"
                  className="dropdown-item signin"
                  style={{ textAlign: "center", color: "white" }}
                >
                  {props.dataUser.name}
                </Link>
                <hr />
                <p style={{ textAlign: "center", color: "white" }}>
                  <Link
                    href="#"
                    className="dropdown-item"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Setting
                  </Link>
                </p>
                <p style={{ textAlign: "center", color: "white" }}>
                  <Link
                    href="#"
                    className="dropdown-item"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Account
                  </Link>
                </p>
                <Link
                  onClick={logOut}
                  className="dropdown-item"
                  style={{ textAlign: "center", color: "white" }}
                >
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link to="#" className="dropdown-item">
                Register
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="signin">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    userName: state.user.userName,
    passWord: state.user.passWord,
    login: state.user.login_status,
  };
};
const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolProfil);
