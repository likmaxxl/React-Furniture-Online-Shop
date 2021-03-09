import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import FurnitureProductGrid from '../Furniture/FurnitureProductGrid'

const Search = (props) => {
  return (
  <>
  <UserContext.Consumer>
{
  (context)=>(
    <>

  <div className="searchPage">
<div className="container">
  <div className="row">


      {
        context.state.searchCurrentShowedItem.length>0?context.state.searchCurrentShowedItem.map((alls)=>{
          return <div className="coll col-lg-12">
          <FurnitureProductGrid
            image={alls.img[0]}
            name={alls.name}
            price={alls.price}
            stars={alls.stars}
            dataIndex={alls.id}
            overview={alls.shortDescription}
          />
        </div>
      }):<div className="noMach">
        <div class="alert alert-warning" role="alert">
        <span><i class="fas fa-exclamation-circle"></i></span>Sorry! No matches were found for "{context.state.searchInputOnClick}"
      </div>
        <h4>You may consider to</h4>
      <div className="check">
        <ul>
          <li><h5>Check search tips:</h5></li>
        </ul>

      </div>
      <div className="try">
      <p>Ensure words are spelled correctly.</p>
      <p>Insert space or comma between two or more keywords.</p>
      <p>Try less specific keywords.</p>
      <p>Try rephrasing keywords or using synonyms.</p>
      </div>
      </div>
      }
  </div>
    </div>
</div>
    </>
  )
}
  </UserContext.Consumer>
  </>
  )
}

export default Search
