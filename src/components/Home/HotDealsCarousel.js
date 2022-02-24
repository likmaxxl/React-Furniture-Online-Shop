import React from 'react'
import PropTypes from 'prop-types'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {UserContext} from '../Context'
import DateCountdown from 'react-date-countdown-timer';
import {Link} from 'react-router-dom'

const HotDealsCarousel = (props) => {

  return (
  <div>
<UserContext.Consumer>
 {
   (context)=>(
<>


  <div className="daysLeft">
    <DateCountdown
      dateTo='February 29, 2022 00:00:00 GMT+03:00'
      locales={['year','month','days','hrs','min','sec']}
      locales_plural={['year','month','days','hrs','min','sec']}
      callback={()=>alert('Hello')}/>
  </div>
       <div>
          <div className="addToCartBtn">
            <button disabled={context.state.allProductsData[props.keyIndex-1].inCart===true} data-index={props.keyIndex} onClick={context.addToCartButton} className="btn from-center" >
              <span style={{ pointerEvents: "none"}}>
                <i style={{ pointerEvents: "none"}} className="fas fa-cart-plus"></i>
              </span>
            {context.state.allProductsData[props.keyIndex-1].inCart===true?"ADDED":"ADD TO CART"}
            </button>
          </div>

          <img src={props.allHot.img[0]} />

          <div className="legend">
            <span>{props.allHot.name}</span>
            <div className="stars">
              {
              props.allHot.stars.map((all)=>{
                return <i className="fas fa-star"></i>
              })
              }
            </div>
            <div className="borderHotDeals"></div>
            <div className="options">
              <div className="optionsViews">
                <div className="boxViews">
                <Link to={context.state.linkSingleProduct} onClick={context.hotDealsViewProduct} data-index={props.keyIndex}>
                   <i onClick={context.hotDealsViewProduct} data-index={props.keyIndex} className="fas fa-eye"></i>
                 </Link>
                </div>
                <div className="boxViews"data-index={props.keyIndex} onClick={context.likeProductHeart}>
                  {
                    context.state.allProductsData[props.keyIndex-1].liked?
                    <i style={{pointerEvents:'none'}} class="animationHeart fas fa-heart"></i>:
                      <i style={{pointerEvents:'none'}} className="far fa-heart"></i>
                  }
                </div>
                <Link onClick={context.hotDealsViewProduct}
                  to={context.state.linkToComparePage}
                  data-index={props.keyIndex}
                  >
                <div style={{pointerEvents:'none'}} className="boxViews">
                  <i style={{pointerEvents:'none'}} className="fas fa-exchange-alt"></i>
                </div>
              </Link>
              </div>
              <div className="prices">
                <div className="oldPrice">${props.allHot.oldPrice}</div>
              <div className="newPrice">${props.allHot.newPrice.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
        </>

           )
         }
        </UserContext.Consumer>
  </div>
  )
}

export default HotDealsCarousel
