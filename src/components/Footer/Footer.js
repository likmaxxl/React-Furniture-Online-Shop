import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import visa from '../../img/visa.png'
import master from '../../img/master.png'
import discover from '../../img/discover.png'
import american from '../../img/american.png'
import payPall from '../../img/payPall.png'

const Footer = (props) => {
  return (
    <>
<footer>
<div className="container">
  <div className="row">
    <div className="coll col-lg-3">
      <article>
        <h5>Information</h5>
      <ul>
        <Link to="">
          <li>About us</li>
        </Link>
        <Link to="">
          <li>Privacy</li>
        </Link>
        <Link to="">
          <li>Conditions</li>
        </Link>
        <Link to="">
          <li>Online support</li>
        </Link>
      </ul>
      </article>
    </div>
    <div className="coll col-lg-3">
      <article>
        <h5>MY ACCOUNT</h5>
      <ul>
        <Link to="">
          <li>Login</li>
        </Link>
        <Link to="">
          <li>My Cart</li>
        </Link>
        <Link to="">
          <li>Wishlist</li>
        </Link>
        <Link to="">
          <li>Checkout</li>
        </Link>
      </ul>
      </article>
    </div>
    <div className="coll col-lg-3">
      <article>
        <h5>Information</h5>
      <ul>
        <Link to="">
          <li>Specials</li>
        </Link>
        <Link to="">
          <li>New Products</li>
        </Link>
        <Link to="">
          <li>Best Sellers</li>
        </Link>
        <Link to="">
          <li>Our Stores</li>
        </Link>
      </ul>
      </article>
    </div>
    <div className="coll col-lg-3">
      <article>
        <h5>Orders</h5>
      <ul>
        <Link to="">
          <li>Payment options</li>
        </Link>
        <Link to="">
          <li>Shipping and delivery</li>
        </Link>
        <Link to="">
          <li>Returns</li>
        </Link>
        <Link to="">
          <li>Shipping</li>
        </Link>
      </ul>
      <ul>
        <li>
          <img src={visa} alt="visa" className="img-fluid"/>
      </li>
      <li>
        <img src={master} alt="master" className="img-fluid"/>
    </li>
    <li>
      <img src={discover} alt="discover" className="img-fluid"/>
  </li>
  <li>
    <img src={american} alt="american" className="img-fluid"/>
</li>
<li>
  <img src={payPall} alt="payPall" className="img-fluid"/>
</li>

      </ul>
      </article>
    </div>
  </div>

</div>
</footer>
<div className="copyright">
<div className="row">
<div className="coll col-lg-7">
<div className="copyrightText">
&copy;Copyright 2016 Bazar Developed By LikmaXXL 2020 | All Rights Reserved
</div>
</div>
<div className="coll col-lg-5">
<div className="social">
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-youtube"></i></a>
<a href="#"><i className="fab fa-google-plus-g"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-pinterest-p"></i></a>
</div>
</div>

</div>
</div>

    </>
  )
}

export default Footer
