import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import {Link} from 'react-router-dom'
const FeaturedProduct = (props) => {
  return (
<>
<UserContext.Consumer>
  {
    (context)=>(
      <>
<div className="featuredProduct">
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
${props.price}
</div>
<div className="stars">
  {props.stars.map((allStars)=>{
    return <i className="fas fa-star"></i>
  })}
</div>
<div className="addToCart">
<button
  disabled={context.state.allProductsData[props.dataIndex-1].inCart===true}
  data-index={props.dataIndex}
  onClick={context.addToCartButton}>
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

export default FeaturedProduct
