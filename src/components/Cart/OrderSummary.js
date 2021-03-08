import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'



const OrderSummary = (props) => {
  return (
    <>
    <UserContext.Consumer>
{
  (context)=>(

<>
<div className="orderBox">
  <div className="head">
    <h5>Order summary</h5>
  </div>
  {
    context.state.itemInCart.map((all,index)=>{
  return   <div key={index} className="totalItems">

      <div className="totalIt">
        {all.quantity>0?<>{all.quantity} <span style={{fontSize:'10px'}}> <i class="fas fa-times"></i></span> </>:''}  {all.name}
          </div>
          <div className="totalPri">
          ${all.quantity*all.price}
          </div>
        </div>
      })

    }


  <div className="shipping">
    <div className="shippingText">
Shipping
    </div>
    <select
      onChange={context.shippingValueChange}
      name="filterByPrice"
      value={context.state.shippingVal}
      >

      <option value="105.56">Standard delivery-$105.56</option>
    <option value="207.40">Fast delivery $207.40</option>
    </select>
  </div>
  <div className="totalCost">
    <div className="totalText">
      Total cost
    </div>
    <div className="totalPrice">
${context.state.totalSum+parseFloat(context.state.shippingVal)}
    </div>
  </div>
  <div className="btn">
    <button className="button">Checkout</button>
  </div>
<div className="promoCode">
  <input type="text" placeholder='PROMOTIONAL CODE'/><span><i class="fas fa-plus"></i></span>
</div>
</div>
</>
  )
}
    </UserContext.Consumer>
    </>
  )
}

export default OrderSummary
