import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {Link} from 'react-router-dom'
import {UserContext} from '../Context'
// import FurnitureGalleryNavigationImages from './FurnitureGalleryNavigationImages'


const FurnitureGallery = (props) => {
  return (
    <>
    <UserContext.Consumer>
    {
      (context)=>(
<>
      <div id="furnitureGallery">
        <div className="container">
          <div className="row">
            <div className="coll col-lg-6">
              <div className="header">
                <div className="title">
                  <h4>Furniture Gallery</h4>
                </div>
                <div className="navigationGallery">
                  <ul>
                    <li className={context.state.furnitureGalleryNavbarHomeText=="featured" ? "active" :""} onClick={context.furnitureGalleryNavbarHome}>Featured</li>
                  <li className={context.state.furnitureGalleryNavbarHomeText=="top seller" ? "active" :""} onClick={context.furnitureGalleryNavbarHome}>Top seller</li>
                <li className={context.state.furnitureGalleryNavbarHomeText=="sale off" ? "active" :""} onClick={context.furnitureGalleryNavbarHome}>Sale off</li>
              <li className={context.state.furnitureGalleryNavbarHomeText=="top rated" ? "active" :""} onClick={context.furnitureGalleryNavbarHome}>Top Rated</li>
                  </ul>
                </div>
              </div>
              <div id="carouselFurniture">
                <Carousel>
                  {
                  context.state.furnitureGalleryNavbarHomeText===context.state.furnitureGalleryNavbarHomeText&&
                    context.state.allProductsData.filter(
                      (allProducts) =>
                        allProducts.furnitureGalleryProducts ===
                          context.state.furnitureGalleryNavbarHomeText
                    ).map((all)=>{
                      return   <div>
                          <img src={all.img[0]} />
                          <div className="options">
                            <div className="boxTooltip">
                              <div className="box" onClick={context.likeProductHeart}
                              data-index={all.id}>
                              {
                                context.state.allProductsData[all.id-1].liked?
                                <i style={{pointerEvents:'none'}} class="animationHeart fas fa-heart"></i>:
                                  <i style={{pointerEvents:'none'}} className="far fa-heart"></i>
                              }
                            </div>
                             <span>{  context.state.allProductsData[all.id-1].liked?"You like this":"Like"}</span>
                            </div>
                            <div className="boxTooltip">

                              <Link onClick={context.hotDealsViewProduct}
                                to={context.state.linkToComparePage}
                                data-index={all.id}
                                >
                              <div style={{pointerEvents:'none'}} className="box">
                                <i style={{pointerEvents:'none'}} className="fas fa-exchange-alt"></i>
                              </div>
                            </Link>
                              <span>Compare</span>
                            </div>
                            <div className="boxTooltip">
                              <div className="box">
                                <Link to={context.state.linkSingleProduct}
                                  onClick={context.hotDealsViewProduct}
                                  data-index={all.id}>
                                   <i onClick={context.hotDealsViewProduct}
                                     data-index={all.id} className="fas fa-eye"></i>
                               </Link>
                              </div>
                              <span>View</span>
                            </div>
                            <div className="boxTooltip">
                              <div style={{pointerEvents:context.state.allProductsData[all.id-1].inCart===true&& "none"}} className="box" data-index={all.id} onClick={context.addToCartButton}>
                                <i style={{ pointerEvents: "none"}} className="fas fa-cart-plus"></i>
                              </div>
                              <span style={{ pointerEvents: "none"}}>{context.state.allProductsData[all.id-1].inCart === true
                                ? "ADDED"
                                : "ADD TO CART"}</span>
                            </div>
                          </div>
                          <div className="priceTitle">
                            <div className="prices">
                              <div className="newPrice">${all.newPrice}</div>
                              <div className="oldPrice">${all.oldPrice}</div>
                            </div>
                            <div className="titlePrice">
                              <h4>{all.name}</h4>
                              <div className="stars">
                                {
                                all.stars.map((all)=>{
                                  return <i className="fas fa-star"></i>
                                })
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                    })
                  }

                </Carousel>
              </div>
            </div>
            <div className="coll col-lg-6">

              <div className="adBanner">
                <div className="price">
                  <span>from</span> <span>$50.80</span>
                </div>
                <div className="titleBanner">Bedroom bed</div>
              <Link to="/furniture">
              <button>Shop now</button>
              </Link>
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

export default FurnitureGallery;
