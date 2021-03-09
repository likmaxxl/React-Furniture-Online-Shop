import React from 'react'
import PropTypes from 'prop-types'

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import NewProduct from "../Home/NewProduct";
import {UserContext} from '../Context'
import FilterByPrice from "../FilterByPrice/FilterByPrice";
import FurnitureProductGrid from '../Furniture/FurnitureProductGrid'
import Jumbatron from "../Jumbatron/Jumbatron";
import {Link} from 'react-router-dom'
import NavigationRoute from '../NavigationRoute/NavigationRoute'
import Baner1 from '../Jumbatron/Baner1'
import Baner2 from '../Jumbatron/Baner2'
import Baner3 from '../Jumbatron/Baner3'
import Baner4 from '../Jumbatron/Baner4'
import Baner5 from '../Jumbatron/Baner5'
import Baner6 from '../Jumbatron/Baner6'

import img2 from '../../img/banersImgs/sofa1.jpeg'
import imgChair1 from '../../img/banersImgs/baner1BarChair.jpg'
import table1 from '../../img/banersImgs/table1.jpeg'
import logo from '../../img/logo-1.png'

const Sofa = (props) => {

  return (
  <>

      <UserContext.Consumer>
    {
      (context)=>(
        <>
        <div id="sofa">
        <Jumbatron
    span1={"excellent quality"}
    span2={"Sofa"}
    span3={"Always"}
    span4={"9%"}

          />


        <NavigationRoute selectedCategory={'Sofa'}/>
          <div className="boxesfilteredProducts">
            <div className="banners">
              <Baner6
                marginTop={'20px'}
                logo={logo}/>

                <Baner3

                name={'sofa'}
                background={'#FF6942'}/>

            </div>


                <div className='container'>

      <FilterByPrice />


        <div className="row">

              {context.currentTodos.map((alls)=>{
                    return context.state.columns?<div className="coll col-lg-4 col-xl-3">
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

        </div>
        <div className="pagnation">
          <div className="pagnationFlex">
        {

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
              <div className="banners">
                <div className="inputRange" style={{marginBottom:'40px',marginTop:'0px'}}>
                <div className="title"style={{marginBottom:'10px'}}>
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
                <Baner5
                marginTop={'0px'}
                img1={table1}
                />
              <Baner1 marginTop={'30px'}/>
                {/* <Baner3

                name={'chairs'}
                background={'#FF6942'}/> */}
                <Baner2
              img2={img2}
              />
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

export default Sofa
