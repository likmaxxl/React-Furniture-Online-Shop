import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery';
import {UserContext} from '../Context'

const SingleProductCarousel = (props) => {
  return (
<>
<UserContext.Consumer>
{
  (context)=>(
    <>
<ImageGallery
  items={context.state.singleProductCarouselImages&&context.state.singleProductCarouselImages}
showPlayButton={false}
 />
 </>
)
}
</UserContext.Consumer>
</>
  )
}

export default SingleProductCarousel
