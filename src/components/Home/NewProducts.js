import React from "react";

import NewProduct from "./NewProduct";
import { UserContext } from "../Context";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const NewProducts = (props) => {
  return (
    <>
      <UserContext.Consumer>
        {(context) => (
          <>

            <div className="newProducts">
              <div className="container">
                <div className="titleAndNav">
                  <div className="titleRel">
                    <div className="titleAbs">
                      <h4>{context.state.furnitureNavigationLink.toUpperCase()}</h4>
                    </div>
                  </div>
                  <div className="navNewProducts">
                    <ul>
                      <li
                        className={
                          context.state.furnitureNavigationLink == "bed"
                            ? "activeOnClick"
                            : ""
                        }
                        onClick={context.furnitureNavigationHendlerClick}
                      >
                        Bed
                      </li>
                      <li
                        className={
                          context.state.furnitureNavigationLink == "chair"
                            ? "activeOnClick"
                            : ""
                        }
                        onClick={context.furnitureNavigationHendlerClick}
                      >
                        Chair
                      </li>
                      <li
                        className={
                          context.state.furnitureNavigationLink == "sofa"
                            ? "activeOnClick"
                            : ""
                        }
                        onClick={context.furnitureNavigationHendlerClick}
                      >
                        Sofa
                      </li>
                      <li
                        className={
                          context.state.furnitureNavigationLink == "table"
                            ? "activeOnClick"
                            : ""
                        }
                        onClick={context.furnitureNavigationHendlerClick}
                      >
                        Table
                      </li>
                      <li
                        data-index="5"
                        className={
                          context.state.furnitureNavigationLink == "officechair"
                            ? "activeOnClick"
                            : ""
                        }
                        onClick={context.furnitureNavigationHendlerClick}
                      >
                        OfficeChair
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="products">

                      <div className="row">
                        {context.state.furnitureNavigationLink ===
                          context.state.furnitureNavigationLink &&
                          context.state.allProductsData
                            .filter(
                              (allBeds) =>
                                allBeds.furniture ===
                                  context.state.furnitureNavigationLink
                            )
                            .map((alls,index) => {
                              return<div className="coll col-lg-3">
                              <NewProduct
                                      image={alls.img[0]}
                                      name={alls.name}
                                      price={alls.price}
                                      stars={alls.stars}
                                      dataIndex={alls.id}
                                />
                            </div>
                            })}
                      </div>

                </div>
              </div>
            </div>
          </>
        )}
      </UserContext.Consumer>
    </>
  );
};

export default NewProducts;
