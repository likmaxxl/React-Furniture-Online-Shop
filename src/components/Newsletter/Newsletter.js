import React from 'react'
import PropTypes from 'prop-types'

const Newsletter = (props) => {
  return (
<>
  <div className="newsLetter">
    <div className="textNewstLetter">
      Newsletter:
    </div>
    <form>
      <span><i className="fas fa-envelope"></i></span>
    <input type="text" placeholder="Enter your email address"/>
<div className="btn">
  <button><i className="fas fa-arrow-right"></i></button>
</div>
    </form>
  </div>
</>
  )
}

export default Newsletter
