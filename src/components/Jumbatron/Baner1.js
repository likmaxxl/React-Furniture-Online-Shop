import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import barsChairs from '../../img/banersImgs/baner1BarChair.jpg'
import paypal from '../../img/banersImgs/paypal.png'

const Baner1 = (props) => {
  return (
<UserContext.Consumer>
{
  (context)=>(
    <>
<div className="banner1" style={{marginTop:props.marginTop}}>
  <div className="sides side1">
<div className="img">
  <img src={paypal} alt="" className="img-fluid"/>
</div>
<div className="text">
  <p>Credit</p>
<p>Shop now</p>
<p>Pay latter</p>
<p>6 Month,NO Paymants, No Interest</p>
</div>
  </div>
<div className="sides side2">
  <div className="img">
    <img src={paypal} alt="" className="img-fluid"/>
  </div>
  <div className="text">
    <p>Credit</p>
  <p>Shop now</p>
  <p>Pay latter</p>
  <p>6 Month,NO Paymants, No Interest</p>
  </div>
</div>
  <div className="sides side3">
    <div className="img">
      <img src={paypal} alt="" className="img-fluid"/>
    </div>
    <div className="text">
      <p>Credit</p>
    <p>Shop now</p>
    <p>Pay latter</p>
    <p>6 Month,NO Paymants, No Interest</p>
    </div>
  </div>
<div className="sides side4">
  <div className="img">
    <img src={paypal} alt="" className="img-fluid"/>
  </div>
  <div className="text">
    <p>Credit</p>
  <p>Shop now</p>
  <p>Pay latter</p>
  <p>6 Month,NO Paymants, No Interest</p>
  </div>
</div>
</div>
    </>
  )
}
</UserContext.Consumer>
  )
}

export default Baner1
