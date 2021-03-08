import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {UserContext} from '../Context'

const Jumbatron = (props) => {
  return (
<>
<UserContext.Consumer>
{
  (context)=>(
    <>

<div className="jumbatron">
    <div className="title">
      <h1>
        <span>{props.span1}</span> {context.state.nvigationOfSingleProduct}
      </h1>
      <p>
        {props.span3} <span>{props.span4}</span> off or more
      </p>
    </div>

      </div>

      </>
      )
    }
    </UserContext.Consumer>

</>
  )
}

export default Jumbatron
