import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import {Link} from 'react-router-dom'

const FeaturedProductGrid = (props) => {

  return (
<>
<UserContext.Consumer>
{
  (context)=>(
    <>
    <div className="featuredProductGrid">
    <div className="product">
    <div className="img">
    <img className="img-fluid" src={props.image} alt=""/>
    </div>
    <div className="productInfo">
    <div className="titleInfo">
      <Link to={context.state.linkSingleProduct}
        onClick={context.singleItemInCartOnClick}
        data-index={props.dataIndex}

        >
    {props.name}
    </Link>
    </div>
    <div className="price">
    ${props.price.toFixed(2)}
    </div>
    <div className="stars">
    {props.stars.map((allStars)=>{
      return <i className="fas fa-star"></i>
    })}
    </div>
    <div className="text">
      {props.overview}
    </div>
    <div className="addToCart">
      <div className="like" data-index={props.dataIndex} onClick={context.likeProductHeart}>
        {
          context.state.allProductsData[props.dataIndex-1].liked?
          <i style={{pointerEvents:'none'}} class="animationHeart fas fa-heart"></i>:
            <i style={{pointerEvents:'none'}} className="far fa-heart"></i>
        }
      </div>
      <Link onClick={context.hotDealsViewProduct}
        to={context.state.linkToComparePage}
        data-index={props.dataIndex}
        >
      <div style={{ pointerEvents: "none"}} className="compare">
        <i style={{ pointerEvents: "none"}} class="fas fa-exchange-alt"></i>
      </div>
    </Link>
      <div className="viewProduct">
        <Link to={context.state.linkSingleProduct} data-index={props.dataIndex} onClick={context.hotDealsViewProduct} className="btn">
        <i style={{ pointerEvents: "none"}} class="fas fa-search"></i>
    </Link>
      </div>
    <button
      disabled={context.state.allProductsData[props.dataIndex-1].inCart===true}
      data-index={props.dataIndex}
      onClick={context.addToCartButton}>
      <span style={{ pointerEvents: "none"}}>
        <i style={{ pointerEvents: "none"}} className="fas fa-cart-plus"></i>
      </span>
    {context.state.allProductsData[props.dataIndex-1].inCart===true?"ADDED":"ADD TO CART"}
    </button>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
</UserContext.Consumer>
</>
  )
}

export default FeaturedProductGrid
