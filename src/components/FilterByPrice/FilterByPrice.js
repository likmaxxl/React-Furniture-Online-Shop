import React from "react";
import PropTypes from "prop-types";
import {UserContext} from '../Context'

const FilterByPrice = (props) => {
  return (
    <>
    <UserContext.Consumer>
  {
    (context)=>(
<>


      <div className="filterByPrice">
        <div className="title">
          <h5>Furniture</h5>
        </div>
        <div className="filterTitle">
          <div className="filterPrice">
            <form action="">
              <div className="price">
                <span>Sort by</span>
              <select
                onChange={context.sortPrice}
                name="filterByPrice"
                value={context.state.selectedVal}
                >
                <option value=""></option>
                <option value="toTop">Price: Low to top</option>
                <option value="toLow">Price:Top to low</option>
                </select>
              </div>
              <div className="howMuchShow">
                <span>Show</span>
                <select
onChange={context.showItemsOnPage}
name={'itemsShow'}
value={context.state.furnitureShowItemsPerPage}
                   >

                  <option value="3">3</option>
                <option value="6">6</option>
              <option value="9">9</option>
            <option value="12">12</option>
                </select>
              </div>
            </form>
          </div>
          <div className="blockGrid">
            <div className="icon">
              <span className={context.state.columns&&"columnsClickedColor"} onClick={context.columnsProducts}>
                <i className="fas fa-th-large"></i>
              </span>
            </div>
            <div className="icon">
              <span className={!context.state.columns&&"gridClickedColor"} onClick={context.gridProducts}>
                <i className="fas fa-list"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      </>

          )
        }
          </UserContext.Consumer>
    </>
  );
};

export default FilterByPrice;
