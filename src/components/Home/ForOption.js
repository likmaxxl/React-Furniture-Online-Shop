import React from "react";
import PropTypes from "prop-types";

const ForOption = (props) => {
  return (
    <>
      <div id="forOption">
        <div className="container">
          <div className="row">
            <div className="coll col-lg-3 col-md-6">
              <article>
                <div className="icon">
                  <span>
                    <i className="fas fa-truck"></i>
                  </span>
                </div>
                <p>Free shipping</p>
                <p>All order</p>
              </article>
            </div>
            <div className="coll col-lg-3 col-md-6">
              <article>
                <div className="icon">
                  <span>
                    <i className="fas fa-headphones-alt"></i>
                  </span>
                </div>
                <p>24/7 customer</p>
                <p>Support</p>
              </article>
            </div>
            <div className="coll col-lg-3 col-md-6">
              <article>
                <div className="icon">
                  <span>
                    <i className="fas fa-reply-all"></i>
                  </span>
                </div>
                <p>Money back</p>
                <p>Guarantee</p>
              </article>
            </div>
            <div className="coll col-lg-3 col-md-6">
              <article>
                <div className="icon">
                  <span>
                    <i className="fas fa-bullhorn"></i>
                  </span>
                </div>
                <p>Member discount</p>
                <p>First order</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForOption;
