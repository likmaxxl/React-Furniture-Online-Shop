import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import {Link} from 'react-router-dom'

const NavigationRoute = (props) => {
  return (
<>
<UserContext.Consumer>
{
  (context)=>(
    <>
    <div className="navBar">
      <div className="logo">{context.state.nvigationOfSingleProduct}</div>
      <div className="navigation">
        <nav>
          <Link onClick={context.furnitureCLick} to="/">
            Home{" "}
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </Link>
          <Link onClick={context.furnitureCLick} to="/furniture">
            Furniture{" "}
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </Link>
          <Link
            onClick={context.filterByCategories}
            to={context.state.linkToClickedProduct}>
            {context.state.nvigationOfSingleProduct}
          </Link>
        </nav>
      </div>
    </div>
    </>
  )
}
</UserContext.Consumer>
</>
  )
}

export default NavigationRoute
