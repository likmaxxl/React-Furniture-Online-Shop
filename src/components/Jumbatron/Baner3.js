import React from 'react'
import PropTypes from 'prop-types'

const Baner3 = (props) => {
  return (
  <>
<div className="baner3" style={{background:props.background,marginTop:props.marginTop}}>
<div className="head">
  Ultra<br/>
modern<br/>
{props.name}<br/>
</div>
<div className="text">
  Everything you need<br/>
to create a<br/>
space you love
</div>
</div>
  </>
  )
}

export default Baner3
