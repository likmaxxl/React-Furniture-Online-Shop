import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import {Link} from 'react-router-dom'
const ItemsInCart = (props) => {
  return (
    <>
    <UserContext.Consumer>
{
  (context)=>(
    <>

  <div className="item">
  <div className="box img">
  <a href="#">
  <img src={props.img[0]} className="img-fluid" alt=""/>
  </a>
  </div>



  <div className="box info">
    <h5><Link to={context.state.linkSingleProduct}
      onClick={context.singleItemInCartOnClick}
      data-index={props.id}

      >{props.name}</Link></h5>
  <p><span>Furniture:</span> <span>{props.furniture}</span> </p>
  <p><span>Id:</span> <span>{props.id}</span> </p>
<div className="stars">
{
props.stars.map((all)=>{
  return <i className="fas fa-star"></i>
})
}


  </div>
  <div key={props.index} className="remove" data-index={props.index} onClick={context.removeButton}>
  Remove
  </div>
  </div>


  <div className="box price">
  <div className="priceProduct">
    ${props.price}
  </div>
  <div className="quantity">

    <select
          data-index={props.index}
          name="selectQuantity"
          value={context.state.itemInCart[props.index].quantity}
          onChange={context.itemsInCartQuantitySelect}>
      <option value="1">1</option>
    <option value="2">2</option>
      <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>

  </div>
  </div>
  <div className="box totalPerProduct">
  ${props.price*context.state.itemInCart[props.index].quantity}
  </div>
  </div>
    </>
  )
}

    </UserContext.Consumer>
    </>
  )
}

export default ItemsInCart
