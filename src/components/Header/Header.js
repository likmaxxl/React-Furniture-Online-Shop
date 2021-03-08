import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import logo from '../../img/logo-1.png'
import {UserContext} from '../Context'
import {Link} from 'react-router-dom'
import Notification from '../Notification/Notification'

const Header = (props) => {
  return (
  <>
  <UserContext.Consumer>
{
  (context)=>(

    <>


  <div id="header" className={context.state.navbarClassOnscroll}>
<div className="headerAbs">
      {/* {context.state.ifClickedAddToCartBtnNotification?
        context.state.itemInCart.map((all)=>{
          return <Notification/>

        }):''} */}



      <div className={context.state.topHeadPadding}>
    <div className="container">
      <div className="row">
        <div className="coll col-md-4">
          <div className="number">
            <a href="tel:2300-3560-222" style={{display:'flex',alignItems:'center', textDecoration:'none'}}>
            <div className="icon">


              <i className="fas fa-mobile-alt"></i>

            </div>
            <div className="numb">2300-3560-222</div>
</a>
          </div>
        </div>
        <div className="coll col-md-4">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        </div>
        <div className="coll col-md-4">
          <Link to={context.state.itemInCart&&context.state.itemInCart.length>0&&"/cart"}>
          <div className="shopCart" onClick={context.furnitureCLick}>

            <div className="icon">
              <i className="fas fa-cart-plus"></i>
            </div>

            <div className="quantity">
              {context.state.itemInCart&&context.state.itemInCart.length}
            </div>
          </div>
            </Link>
        </div>
      </div>
</div>
    </div>
    <Navigation/>
  </div>
  </div>
  </>
)
}
</UserContext.Consumer>
  </>
  )
}

export default Header
