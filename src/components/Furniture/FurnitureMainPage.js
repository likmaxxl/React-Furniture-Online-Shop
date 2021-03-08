import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {UserContext} from '../Context'
import NewProduct from "../Home/NewProduct";
import Jumbatron from "../Jumbatron/Jumbatron";
import FilterByPrice from "../FilterByPrice/FilterByPrice";
import FilterRightBar from "../FilterRightBar/FilterRightBar";
import Newsletter from '../Newsletter/Newsletter'
import Brands from '../Home/Brands'
import FurnitureProductGrid from './FurnitureProductGrid'
import FurnitureRoute from '../NavigationRoute/FurnitureRoute'

const FurnitureMainPage = (props) => {
  const tableStyleRow={
    display:'table',
  }

    const tableStyleColumn={
    display: 'table-cell',
    }
  return (
    <>
    <UserContext.Consumer>
      {
        (context)=>(
          <>

      <div id="furnitureMainPage">
<div className="container">
          <Jumbatron
    span1={"Bedroom"}
    span2={"Furniture"}
    span3={"Always"}
    span4={"25%"}

            />
</div>

<FurnitureRoute/>
        <div className="container">
          <div className="row">
            <div className="coll col-lg-9">
              <FilterByPrice />

        <div className="row">

    {context.currentTodos.map((alls)=>{

          return context.state.columns?<div className="coll col-lg-4">
        <NewProduct
              image={alls.img[0]}
              name={alls.name}
              price={alls.price}
              stars={alls.stars}
              dataIndex={alls.id}
        />
    </div>:<div className="coll col-lg-12">
    <FurnitureProductGrid
      image={alls.img[0]}
      name={alls.name}
      price={alls.price}
      stars={alls.stars}
      dataIndex={alls.id}
      overview={alls.shortDescription}
      />
  </div>

    })}
<div className="pagnation">
  <div className="pagnationFlex">

{
// pageBtns
context.pgNumbers.map(number => {
        return (
          <button
            className={number==context.state.currentPage?"pageBtns selectedButtonPagnation":"pageBtns" }
            key={number}
            id={number}
            onClick={context.handleClick}
          >
            {number}
          </button>
        );
      })

}
  </div>
    </div>

        </div>

        </div>
            <div className="coll col-lg-3">
              <FilterRightBar />
            </div>
          </div>



    <Brands />
        </div>
  <Newsletter/>
      </div>
      </>
    )
  }
</UserContext.Consumer>
    </>
  );
};

export default FurnitureMainPage;
