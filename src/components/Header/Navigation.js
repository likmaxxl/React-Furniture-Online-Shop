import React from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {UserContext} from '../Context'

const Navigation = (props) => {
  return (
    <>
    <UserContext.Consumer>
  {
    (context)=>(
      <>


      <div id="navigation">
        <div className="container">
          <Navbar expand="lg">
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <div id="menu">
  <div id="pencet" onClick={context.hamburgerBtn}className={context.state.hamburgerButtonAnim}>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline>
                <input
                  name="searchProduct"
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  autoComplete="off"
value={context.state.searchProduct}
onChange={context.compareInput}
                />
              <div className="icon">
                  {" "}
                  <Link
                    to={context.state.linkToClickedProductSearch}
                   onClick={context.searchIconClick}
                    >
                  <i className="fas fa-search"></i>
                  </Link>
                </div>
              </Form>

              <Nav className="mr-auto">
                <Link data-index='/' className={context.state.navLinkBackground==="/"&&"backgroundLinkClicked"} onClick={context.furnitureCLick} to="/">Home</Link>
              <Link data-index='/furniture' className={context.state.navLinkBackground==="/furniture"&&"backgroundLinkClicked"} onClick={context.furnitureCLick} to="/furniture">Furniture</Link>
                {/* <Link to="/chair">Chair</Link>
                <Link to="/table">Table</Link>
                <Link to="/sofa">Sofa</Link>
                <Link to="/bedroom">Bedroom</Link> */}
                <Link data-index='/blog' className={context.state.navLinkBackground==="/blog"&&"backgroundLinkClicked"} onClick={context.furnitureCLick} to="/blog">Blog</Link>
              <Link data-index='/contact' className={context.state.navLinkBackground==="/contact"&&"backgroundLinkClicked"} onClick={context.furnitureCLick} to="/contact">Contact</Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
{/*{context.state.mobileNavPosition==="navToTop"?"mobileNavbar navToTop":"mobileNavbar navToBottom"}*/}
               {/* Mobile navigation bar */}
               <div className={context.state.mobileNavPosition}>
                 <div className="navigationLinksMobile">
                   <Link data-index='/' className={context.state.navLinkBackground==="/"&&"backgroundLinkClicked"} onClick={context.furnitureCLick} to="/">Home</Link>
                 <Link data-index='/furniture' className={context.state.navLinkBackground==="/furniture"&&"backgroundLinkClicked"} onClick={context.furnitureCLick} to="/furniture">Furniture</Link>
                   <Link data-index='/blog' className={context.state.navLinkBackground==="/blog"&&"backgroundLinkClicked"} onClick={context.furnitureCLick} to="/blog">Blog</Link>
                 <Link data-index='/contact' className={context.state.navLinkBackground==="/contact"&&"backgroundLinkClicked"} onClick={context.furnitureCLick} to="/contact">Contact</Link>
                 </div>
               </div>

          <div className="resultRel">
<div className="resultAbs">


      {
        context.state.suggestions4Search.length>0&&
context.state.suggestions4Search.map((all)=>{
return <>{
<div className="productSearch" onClick={context.selectEl}>
<div className="name">
{all.name}
</div>
<div className="image">
<img className="img-fluid" src={all.img[0]} alt=""/>
</div>
</div>}</>
  })

      }
    </div>
                      </div>
        </div>
      </div>
    </>
  )
}
  </UserContext.Consumer>
    </>
  );
};

export default Navigation;
