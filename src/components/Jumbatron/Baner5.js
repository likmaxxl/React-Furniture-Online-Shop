import React from 'react'
import PropTypes from 'prop-types'



const Baner5 = (props) => {
  return (
<>
<div className="baner5" style={{marginTop:props.marginTop}}>
  <div className="img">
    <img src={props.img1} alt="" className='img-fluid'/>
    <div className="text">
      Welcome yourself,<br/>
    when you <br/>
  enter your home.<br/>
    </div>
  </div>

</div>
</>
  )
}

export default Baner5
