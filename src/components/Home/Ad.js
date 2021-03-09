import React from "react";
import PropTypes from "prop-types";
import bedAd from "../../img/bedAd.png";
import chearAd1 from "../../img/chearAd11.png";
import chearAd2 from "../../img/chearAd22.png";
import { Link } from "react-router-dom";
import {UserContext} from '../Context'
const Ad = (props) => {
  return (
    <>
    <UserContext.Consumer>
      {
        (context)=>(
          <>


      <div id="ad">
        <div className="container">
          <div className="row">
            <div className="coll col-lg-6">
                <div className="image" style={{ pointerEvents: "none"}}>
                  <div className="hoverImage">
                    <div className="title">
                      <p>Guest room</p>
                      <p>Sofa</p>
                      <p>-20%</p>
                    </div>
                  </div>
                </div>

            </div>
            <div className="coll col-lg-6">
              <div className="smallAd">

                  <div className="img">
                    <img src={chearAd1} className="img-fluid" alt="" />
                  </div>
                  <div className="text">
                    <span>Office</span> chair
                    <p>Collection</p>
                    <p>$200.00</p>
                  </div>
                  <div className="img">
                    <img src={chearAd2} className="img-fluid" alt="" />
                  </div>

              </div>
              <div className="smallAd">

                  <div className="img">
                    <img className="img-fluid" src={bedAd} alt="" />
                  </div>
                  <div className="text">
                    <span>Special</span> collection
                    <p>Save up 45% of furniture</p>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
)
}
</UserContext.Consumer>
    </>
  );
};

export default Ad;
