import React from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  return (
    // <section>
    <div className="col-sm-10">
      <form className="form-inline my-2" action="#">
        <input
          className="form-control my-lg-auto mr-sm-2"
          type="text"
          name="search"
          placeholder="masukkan destinasi tujuan anda"
          onChange={props.doSearch}
          // value=

          aria-label="Search"
          type="text"
          style={{ fontWeight: "lighter" }}
          placeholder="masukkan nama kota/ tujuan destinasi"
          onChange={props.doSearch}
          style={{ width: "80%" }}
        />
        <button
          className="btn my-2 my-sm-0"
          type="submit"
          style={{ backgroundColor: "white" }}
        >
          <i className="fa fa-fw fa-search"></i>
        </button>
      </form>
    </div>
    // </section>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;
