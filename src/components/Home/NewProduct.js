import React from "react";
import PropTypes from "prop-types";
import { UserContext } from "../Context";
import { Link } from "react-router-dom";
const NewProduct = (props) => {
  return (
    <>
      <UserContext.Consumer>
        {(context) => (
          <>
            <article>
              <div className="image">
                <img src={props.image} className="img-fluid" alt="" />
                <div className="sale">sale</div>
                <div className="btns">
                  <Link
                    to={context.state.linkSingleProduct}
                    data-index={props.dataIndex}
                    onClick={context.hotDealsViewProduct}
                    className="btn"
                  >
                    Quick View
                  </Link>
                  <button
                    className="btn"
                    disabled={
                      context.state.allProductsData[props.dataIndex - 1]
                        .inCart === true
                    }
                    data-index={props.dataIndex}
                    onClick={context.addToCartButton}
                  >
                    <span style={{ pointerEvents: "none" }}>
                      <i
                        style={{ pointerEvents: "none" }}
                        className="fas fa-cart-plus"
                      ></i>
                    </span>
                    {context.state.allProductsData[props.dataIndex - 1]
                      .inCart === true
                      ? "ADDED"
                      : "ADD TO CART"}

                  </button>
                </div>
              </div>
              <div className="legend">
                <span>{props.name}</span>
                <div className="stars">
                  {
                  props.stars.map((all)=>{
                    return <i className="fas fa-star"></i>
                  })
                  }
                </div>
                <div className="borderHotDeals"></div>
                <div className="options">
                  <div className="optionsViews">
                    <div
                      className="boxViews"
                      data-index={props.dataIndex}
                      onClick={context.likeProductHeart}
                    >
                      {context.state.allProductsData[props.dataIndex - 1]
                        .liked ? (
                        <i
                          style={{ pointerEvents: "none" }}
                          class="animationHeart fas fa-heart"
                        ></i>
                      ) : (
                        <i
                          style={{ pointerEvents: "none" }}
                          className="far fa-heart"
                        ></i>
                      )}
                    </div>
                    <Link onClick={context.hotDealsViewProduct}
                      to={context.state.linkToComparePage}
                      data-index={props.dataIndex}
                      >
                      <div
                        style={{ pointerEvents: "none" }}
                        className="boxViews"
                      >
                        <i
                          style={{ pointerEvents: "none" }}
                          className="fas fa-exchange-alt"
                        ></i>
                      </div>
                    </Link>
                  </div>
                  <div className="price">
                    <div className="newPrice">${props.price.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </article>
          </>
        )}
      </UserContext.Consumer>
    </>
  );
};

export default NewProduct;
