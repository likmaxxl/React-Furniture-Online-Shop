import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const FurnitureRoute = (props) => {
  return (
<>
<div className="container">
<div className="route">
<Link to="/">
<span>Home</span>{" "}
</Link>

<span>
  <i className="fas fa-chevron-right"></i>
</span>{" "}
<span>Furniture</span>
</div>
</div>
</>
  )
}

export default FurnitureRoute
