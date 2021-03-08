import React from 'react'
import PropTypes from 'prop-types'


const Baner6 = (props) => {
  return (
  <>
<div className="baner6" style={{marginTop:props.marginTop}}>
  <div className="logo">
    <img src={props.logo} alt="" className="img-fluid"/>
  </div>
  <div className="text">
    Great<br/>
  deals
  </div>
</div>
  </>
  )
}

export default Baner6
