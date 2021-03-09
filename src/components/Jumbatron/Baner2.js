import React from 'react'
import PropTypes from 'prop-types'



const Banner2 = (props) => {
  return (
<>
<div className="banner2">
  <div className="img">
    <img src={props.img2} alt="" className='img-fluid'/>
    <div className="text">
      Latest<br/>
    styles<br/>
  from our<br/>
  offer<br/>
    </div>
  </div>

</div>
</>
  )
}

export default Banner2
