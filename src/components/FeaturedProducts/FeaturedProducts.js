import React from 'react'
import PropTypes from 'prop-types'
import FeaturedProduct from './FeaturedProduct'
import {UserContext} from '../Context'

const FeaturedProducts = (props) => {
  return (
    <>
    <UserContext.Consumer>
      {
        (context)=>(
          <>
  <div className="featuredProducts">
    <div className="productTitle">
      <h5>Featured products</h5>
  </div>

  {
    context.state.allProductsData.filter(featured=>featured.furnitureGalleryProducts==='featured').slice(0, 3).map((all)=>{
      return <FeaturedProduct
        image={all.img[0]}
        name={all.name}
        price={all.price}
        stars={all.stars}
        dataIndex={all.id}
      />
    })
  }


  </div>
</>
)
}
</UserContext.Consumer>
  </>
  )
}

export default FeaturedProducts
