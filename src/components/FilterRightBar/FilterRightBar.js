import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import {UserContext} from '../Context'

class  FilterRightBar extends React.Component{

  render () {

  return (


<div id="filterRightBar">
  <UserContext.Consumer>
    {
      (context)=>(
<>
<div className="title">
  <h6>Filter by categories</h6>
</div>


<div className="filterProducts">
  <div className="productName-Length">
    <div className={context.state.filterByCategoriesCurrentEl==='all'?"productName activeClicked":"productName"}>
      <div className="icon"><i className="fas fa-angle-right"></i></div>
    <div className="name" data-name="all" onClick={context.filterByCategories}>All</div>
    </div>
    <div className="length">
    <span className={context.state.filterByCategoriesCurrentEl==='all'?"aciveSpanClickedLength":""}>{context.state.allProductsData.length}</span>
    </div>
  </div>
  <div className="productName-Length">
    <div className={context.state.filterByCategoriesCurrentEl==='bed'?"productName activeClicked":"productName"}>
      <div className="icon"><i className="fas fa-angle-right"></i></div>
    <div className="name" data-name="bed" onClick={context.filterByCategories}>Bed</div>
    </div>
    <div className="length">
    <span className={context.state.filterByCategoriesCurrentEl==='bed'?"aciveSpanClickedLength":""}>{context.state.allProductsData.filter((all)=>all.furniture==='bed').length}</span>
    </div>
  </div>
  <div className="productName-Length">
    <div className={context.state.filterByCategoriesCurrentEl==='sofa'?"productName activeClicked":"productName"}>
      <div className="icon"><i className="fas fa-angle-right"></i></div>
    <div className="name" data-name="sofa" onClick={context.filterByCategories}>Sofa</div>
    </div>
    <div className="length">
    <span className={context.state.filterByCategoriesCurrentEl==='sofa'?"aciveSpanClickedLength":""}>{context.state.allProductsData.filter((all)=>all.furniture==='sofa').length}</span>
    </div>
  </div>
  <div className="productName-Length">
    <div className={context.state.filterByCategoriesCurrentEl==='chair'?"productName activeClicked":"productName"}>
      <div className="icon"><i className="fas fa-angle-right"></i></div>
    <div className="name" data-name="chair" onClick={context.filterByCategories}>Chairs</div>
    </div>
    <div className="length">
    <span className={context.state.filterByCategoriesCurrentEl==='chair'?"aciveSpanClickedLength":""}>{context.state.allProductsData.filter((all)=>all.furniture==='chair').length}</span>
    </div>
  </div>
  <div className="productName-Length">
    <div className={context.state.filterByCategoriesCurrentEl==='table'?"productName activeClicked":"productName"}>
      <div className="icon"><i className="fas fa-angle-right"></i></div>
    <div className="name" data-name="table" onClick={context.filterByCategories}>Table</div>
    </div>
    <div className="length">
    <span className={context.state.filterByCategoriesCurrentEl==='table'?"aciveSpanClickedLength":""}>{context.state.allProductsData.filter((all)=>all.furniture==='table').length}</span>
    </div>
  </div>

  <div className="productName-Length">
    <div className={context.state.filterByCategoriesCurrentEl==='officechair'?"productName activeClicked":"productName"}>
      <div className="icon"><i className="fas fa-angle-right"></i></div>
    <div className="name" data-name="officechair" onClick={context.filterByCategories}>Office Chairs</div>
    </div>
    <div className="length">
    <span className={context.state.filterByCategoriesCurrentEl==='officechair'?"aciveSpanClickedLength":""}>{context.state.allProductsData.filter((all)=>all.furniture==='officechair').length}</span>
    </div>
  </div>
  <div className="inputRange">
  <div className="title">
  <h6>Filter by price</h6>
  </div>
  <div className="range">
    <InputRange
           maxValue={2000}
           minValue={0}
           value={context.state.value}
           onChange={context.rangeFilter} />
  </div>
  <div className="btnRangePrice">
  {/* <button>Filter</button> */}
  <div className="rangePriceBox">
    <span>${context.state.value.min} - ${context.state.value.max}</span>

  </div>
  </div>
  </div>

</div>



<FeaturedProducts/>
  </>
        )
      }
    </UserContext.Consumer>
</div>
  )
}
}

export default FilterRightBar
