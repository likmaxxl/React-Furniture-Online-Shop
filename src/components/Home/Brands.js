import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import brand1 from "../../img/brand1.png";
import brand2 from "../../img/brand3.png";
import brand3 from "../../img/brand3.png";
import brand4 from "../../img/brand4.png";
import brand5 from "../../img/brand5.png";
import brand6 from "../../img/brand6.png";

const Brands = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="brands">
        <div className="container">
          <div className="brandsCarousel">
            <Carousel responsive={responsive} infinite>

              <div>
                <img src={brand1} className="img-fluid" />
              </div>
              <div>
                <img src={brand2} className="img-fluid" />
              </div>
              <div>
                <img src={brand3} className="img-fluid" />
              </div>
              <div>
                <img src={brand4} className="img-fluid" />
              </div>
              <div>
                <img src={brand5} className="img-fluid" />
              </div>
              <div>
                <img src={brand6} className="img-fluid" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
