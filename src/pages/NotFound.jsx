import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <img src={require("../assets/images/404.webp")} alt="notfound" />
        </div>
        {/* <div className="d-flex justify-content-center">
          <Link to="/">
            <button
              type="button"
              class="btn btn-dark btn-lg"
              style={{ marginTop: "-100px" }}
            >
              Go Back to Home
            </button>
          </Link>
        </div> */}
      </div>
    );
  }
}

export default NotFound;
