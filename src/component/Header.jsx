import React, { Component } from "react";
// import "../style/style.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import ToolProfil from "./ToolProfil";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      {/* <div className="container"> */}
      <Link to="/" className="navbar-brand ml-lg-5" href="#">
        <img
          className="navbar-brand"
          src={require("../assets/images/mlaku.png")}
          class="navbar-brand"
          alt="logo"
          style={{ width: "15vmin" }}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Search {...props} />
        <div className="ml-lg-auto mr-lg-5">
          <ToolProfil {...props} />
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Header;
