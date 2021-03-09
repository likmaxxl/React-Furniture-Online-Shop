import React from "react";
import PropTypes from "prop-types";
import SingleProductCarousel from "./SingleProductCarousel";
import Newsletter from '../Newsletter/Newsletter'
import { Link } from "react-router-dom";
import { UserContext } from "../Context";
import NavigationRoute from '../NavigationRoute/NavigationRoute'
const SingleProduct = (props) => {

  return (
    <>
      <UserContext.Consumer>
        {(context) => (
          <>

            <div className="singleProduct">
              <div className="container">
              <NavigationRoute selectedCategory={'Furniture'}/>
                <div className="productDetailsContainer">
                  <div className="row">
                    <div className="coll col-lg-4">
                      <SingleProductCarousel />
                    </div>
                    <div className="coll col-lg-8">
                      <div className="productDetails">
                        <div className="header">
                        <div className="head">
                          <h3>{context.state.singleProduct&&context.state.singleProduct.name}</h3>
                          <div className="arrows">
                            <div className="icon" onClick={context.singleItemClickLeft}>
                              <i style={{ pointerEvents: "none"}} class="fas fa-chevron-left"></i>
                            </div>
                            <div className="icon" onClick={context.singleItemClickRight}>
                              <i style={{ pointerEvents: "none"}} class="fas fa-chevron-right"></i>
                            </div>
                          </div>
                        </div>
                        <div className="reviews">
                          <div className="stars">
                            {
                          context.state.singleProduct&&context.state.singleProduct.stars.map((all)=>{
                              return <i className="fas fa-star"></i>
                            })
                            }
                          </div>
                          <div className="numberOfreviews">
                            (0 reviews)
                          </div>
                          |
                          <div className="addRreview">
                            Add your review
                          </div>
                        </div>
                        </div>
                        <div className="price">
                          <div className="oldPrice">
                          {context.state.singleProduct&&
                            context.state.singleProduct.oldPrice?
                            "$"+context.state.singleProduct.oldPrice.toFixed(2):''}
                          </div>
                          <div className="newPrice">
                              ${context.state.singleProduct&&context.state.singleProduct.price&&context.state.singleProduct.price.toFixed(2)}
                          </div>
                        </div>
                        <div className="addToCart">
                          <div className="add">
                            <button
                              disabled={context.state.singleProduct&&context.state.allProductsData[context.state.singleProduct.id-1].inCart===true}
                              onClick={context.addToCartButton} data-index={context.state.singleProduct&&context.state.singleProduct.id}>
                               <span style={{ pointerEvents: "none"}}>
                                 <i style={{ pointerEvents: "none"}} class="fas fa-cart-plus"></i>
                             </span>
                             {context.state.singleProduct&&context.state.allProductsData[context.state.singleProduct.id-1].inCart===true?"ADDED":"ADD TO CART"}
                           </button>
                            <div className="like"
                              onClick={context.likeProductHeart}
                              data-index={context.state.singleProduct.id}>

                              {
                                context.state.singleProduct&&context.state.allProductsData[context.state.singleProduct.id-1].liked?
                                <i style={{pointerEvents:'none'}} class="animationHeart fas fa-heart"></i>:
                                  <i style={{pointerEvents:'none'}} className="far fa-heart"></i>
                              }
                            </div>
                            <Link onClick={context.hotDealsViewProduct}
                              to={context.state.linkToComparePage}
                              data-index={context.state.singleProduct.id}
                              >
                            <div style={{pointerEvents:'none'}} className="compare">
                              <i style={{pointerEvents:'none'}} class="fas fa-exchange-alt"></i>
                            </div>
                          </Link>
                          <Link to={context.state.linkToContact}>
                            <div className="askQuestion">
                               <i class="far fa-envelope"></i>
                            </div>
                            </Link>
                        </div>
                      <div className="quantity">
                        <span>Quantity:</span>
                      <div className="sum">{context.state.singleProduct.quantity}</div>
                    <button onClick={context.decrement} disabled={context.state.singleProduct&&context.state.singleProduct.quantity<2 || context.state.singleProduct&&context.state.allProductsData[context.state.singleProduct.id-1].inCart===true}>-</button>
                  <button disabled={context.state.singleProduct&&context.state.allProductsData[context.state.singleProduct.id-1].inCart===true || context.state.singleProduct.quantity>4} onClick={context.increment}>+</button>
                      </div>
                        </div>
                        <div className="overview">
                        <h5>Quick overview</h5>
                      <p>{context.state.singleProduct.overview}</p>
                        </div>
                        <div className="availbility">
                          <div className="availCateg">
                            <span>Availbility:</span> <span>{context.state.singleProduct.avalibility}</span>
                          </div>
                          <div className="availCateg">
                            <span>Category:</span> <span>{context.state.singleProduct.furniture}</span>
                          </div>
                        </div>
                        <div className="socials">
                          <div className="social">
                            <span><i class="fab fa-facebook-f"></i></span>Share
                          </div>
                          <div className="social">
                            <span><i class="fab fa-google-plus-g"></i></span>Google+
                          </div>
                          <div className="social">
                            <span><i class="fab fa-twitter"></i></span>Tweet
                          </div>
                          <div className="social">
                            <span><i class="fab fa-pinterest-p"></i></span>Paintrest
                          </div>
                          <div className="social">
                            <span><i class="fab fa-linkedin-in"></i></span>Linkedin
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <Newsletter/>
          </>
        )}
      </UserContext.Consumer>
    </>
  );
};

export default SingleProduct;
