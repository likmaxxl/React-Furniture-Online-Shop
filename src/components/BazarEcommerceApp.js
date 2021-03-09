import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import '../style/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import FurnitureMainPage from './Furniture/FurnitureMainPage'
import Chair from './Chair/Chair'
import Table from './Table/Table'
import Sofa from './Sofa/Sofa'
import Bedroom from './Bedroom/Bedroom'
import Blog from './Blog/Blog'
import SingleProduct from './Home/SingleProduct'
import Cart from './Cart/Cart'
import Search from './Search/Search'
import ComparePage from './ComparePage/ComparePage'
import Contact from './Contact/Contact'
import {UserContext} from './Context'
import Notification from './Notification/Notification'
import BlogReadMore from './Blog/BlogReadMore'

class BazarEcommerceApp extends React.Component {

  render () {

  return(

    <>
    <UserContext.Consumer>

      {

        (context)=>(
          <div className="wrap" onScroll={context.listenToScroll}>
            {context.state.ifClickedAddToCartBtnNotification?
              context.state.itemInCart.map((all)=>{
                return <Notification/>

              }):''}
    <Router>
  <Header/>
<Switch>
<Route path="/" exact component={Home} />
<Route path="/furniture" component={FurnitureMainPage}/>
<Route path="/chair" component={Chair}/>
<Route path="/table" component={Table}/>
<Route path="/sofa" component={Sofa}/>
<Route path="/bedroom" component={Bedroom}/>
<Route path="/blog" component={Blog}/>
<Route path="/single-product" component={SingleProduct}/>
<Route path="/cart" component={Cart}/>
<Route path="/searchPage" component={Search}/>
<Route path="/comparePage" component={ComparePage}/>
<Route path="/contact" component={Contact}/>
<Route path="/blogReadMore" component={BlogReadMore}/>
</Switch>
  <Footer/>
  </Router>
</div>
)
}
</UserContext.Consumer>
</>
  )
  }
}

export default BazarEcommerceApp;
