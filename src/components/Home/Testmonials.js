import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Testmonials = (props) => {
  return (
    <>
      <div id="testmonials">
        <div className="container">
          <div className="title">
            <h4>Client Feedback</h4>
          </div>
          <div id="testmonialsCarousel">
            <Carousel showThumbs={false}>
              <div>
                <div className="comment">
                  <div className="quotes">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor sed delectus, debitis temporibus voluptas adipisci est
                    nisi explicabo recusandae sapiente quia earum eaque, aperiam
                    officia optio praesentium commodi, odio mollitia quod quae
                    aut?
                  </p>{" "}
                  <div className="person">
                    <div className="img">
                      <img
                        src="https://randomuser.me/api/portraits/men/33.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="personInfo">
                      <p>John Smith</p>
                      <p>Furniture client</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="comment">
                  <div className="quotes">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor sed delectus, debitis temporibus voluptas adipisci est
                    nisi explicabo recusandae sapiente quia earum eaque, aperiam
                    officia optio praesentium commodi, odio mollitia quod quae
                    aut?
                  </p>{" "}
                  <div className="person">
                    <div className="img">
                      <img
                        src="https://randomuser.me/api/portraits/men/33.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="personInfo">
                      <p>John Smith</p>
                      <p>Furniture client</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="comment">
                  <div className="quotes">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor sed delectus, debitis temporibus voluptas adipisci est
                    nisi explicabo recusandae sapiente quia earum eaque, aperiam
                    officia optio praesentium commodi, odio mollitia quod quae
                    aut?
                  </p>{" "}
                  <div className="person">
                    <div className="img">
                      <img
                        src="https://randomuser.me/api/portraits/men/33.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="personInfo">
                      <p>John Smith</p>
                      <p>Furniture client</p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testmonials;
