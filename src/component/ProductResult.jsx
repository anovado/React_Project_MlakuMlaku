import React from "react";
import PropTypes from "prop-types";

const ProductResult = (props) => {
  const { title, imageUrl, price, rating, detailPageURL } = props;
  return (
    <div class="card mb-3 ml-3" style={{ maxWidth: "96.5%" }}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            // src={imageUrl}
            src={imageUrl}
            class="card-img p-4"
            alt="..."
            style={{ Weight: "auto" }}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">Price : {price}</p>
            {/* <p class="card-text">Price : {price}</p> */}
            <p class="card-text">Rating : {rating}</p>
            {/* <p class="card-text">Rating :{rating}</p> */}
            <p class="card-text">
              Page : See detail{" "}
              <a href={detailPageURL} target="blank">
                Here
              </a>
            </p>
            {/* <p class="card-text">Page : {detailPageURL}</p> */}
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductResult;
