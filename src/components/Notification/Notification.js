import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'

const Notification = (props) => {
  return (
  <>
<UserContext.Consumer>
{
  (context)=>(

    <>
   {
     context.state.banerNotification
   }
    </>
  )
}
</UserContext.Consumer>

  </>
  )
}

export default Notification
