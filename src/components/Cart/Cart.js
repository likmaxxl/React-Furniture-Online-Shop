import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import ItemsInCart from './ItemsInCart'
import OrderSummary from './OrderSummary'
const Cart = (props) => {
  return (
<>
<UserContext.Consumer>
{
  (context)=>(

  <>
  <div className="cart">
    <div className="container">
<div className="row">
<div className="coll col-lg-8">

  <div className="header">
<h3>Your Bag</h3><span>{context.state.itemInCart.length} items</span>
  </div>
  <div className="productDetails">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" style={{width:"50%"}}>Product details</th>
        <th scope="col"style={{width:"30%"}}>Quantity and price</th>
      <th scope="col"style={{width:"20%"}}>Total</th>
        </tr>
      </thead>
    </table>
  </div>
    <div className="articles">

  {
    context.state.itemInCart&&context.state.itemInCart.map((all,index)=>{
   return  <ItemsInCart
  
      key={index}
      name={all.name}
      furniture={all.furniture}
      id={all.id}
      price={all.price}
      img={all.img}
      stars={all.stars}
      index={index}

    />

    })
  }
  </div>
</div>
<div className="coll col-lg-4">
<OrderSummary/>
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

export default Cart
