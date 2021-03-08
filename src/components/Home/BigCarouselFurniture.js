import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BigCarouselFurniture = (props) => {
  return (
  <>
    <div>
      <img src={props.allImg}/>
    </div>
  </>
  )
}

export default BigCarouselFurniture
