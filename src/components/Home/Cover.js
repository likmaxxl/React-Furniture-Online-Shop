import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import HotDealsCarousel from "./HotDealsCarousel";
import BigCarouselFurniture from './BigCarouselFurniture'
import {withCustomStatusArrowsAndIndicators} from './BigCarouselFurniture'
import { UserContext } from "../Context";
import {Link} from 'react-router-dom'
import rightArrow from '../../img/right-arrow.png'
import leftArrow from '../../img/left-arrow.png'
import {allProducts} from './../allProducts'







class Cover extends React.Component {
constructor(props){
  super(props)
this.state={
  clickedPrev: false,
 currentSlide: 0,
 allProducts:allProducts
}

}



onClickHandlerNext=()=>{
  this.setState((state) => ({
           currentSlide: state.currentSlide + 1,
          clickedPrev:false
       }));

   };

  onClickHandlerPrev=()=>{

             if(this.state.currentSlide > 0){
                 this.setState(prevState => ({
                   currentSlide: prevState.currentSlide-1,
                    clickedPrev:true
                 }))
              }

    }

    updateCurrentSlide = (index) => {
                const { currentSlide } = this.state;
                    this.setState({
                        currentSlide: this.state.currentSlide,
                        clickedPrev:this.state.clickedPrev
                    },()=>{});



             }




  render () {


const disableButton={
 pointerEvents: "none"
}
  return (
<>

    <UserContext.Consumer>
      {(context) => (
        <>

          <div id="coverHomePage">
            <div className="container">
              <div className="row">
                <div className="coll col-lg-4">
                  <div id="carouselHotDeals">
                    <div className="hotDeals">
                      <span>Hot deals</span>
                    </div>
                    <Carousel showThumbs={false}>
                      {/* {context.state.hotDeals.map((allHotDeals, index) => {
                        return (
                          <HotDealsCarousel allHot={allHotDeals} keyIndex={index} />
                        );
                      })} */}

                      {
                        context.state.allProductsData.filter((allProducts)=>allProducts.hotDeal==='hot').map((allHotDeals,index)=>{
                          return <HotDealsCarousel allHot={allHotDeals} keyIndex={allHotDeals.id}/>
                        })
                      }
                    </Carousel>
                  </div>
                </div>

                <div className="coll col-lg-8">
                  <div id="carouselBig">
                    <div className="carouselBigBanner">
                      <h1>
                        <span>Indoor</span> Furniture
                      </h1>
                      <p >Save up to 50% of all furniture</p>
                      <div className="btn from-center">
                       <Link style={{color: "black",textDecoration:'none'}} to='./furniture'>View More </Link>
                      </div>
                    </div>

                    <Carousel
                      showThumbs={false}
              selectedItem={this.state.currentSlide}
              onChange={this.updateCurrentSlide}


              renderArrowPrev={(onClickHandlerPrev, hasPrev, label) =>



                               (
                                  <button

                                  type="button"
                                  className={this.state.clickedPrev?"control-prev control-arrow focusBackground":"control-prev control-arrow"}
                                  onClick={this.onClickHandlerPrev}
                                  title={label}
                                  >

                                  </button>
                              )
                                }

                          renderArrowNext={(onClickHandlerNext, hasNext, label) =>
                              (
                                  <button

                                  type="button"
                                  className={!this.state.clickedPrev?"control-next control-arrow focusBackground1":"control-next control-arrow "}
                                  onClick={this.onClickHandlerNext}
                                  title={label}
                                  >

                                  </button>
                              )
                          }

                      >

                    {
                      context.state.allProductsData.map((allImgBed,index)=>{
                    return allImgBed.img.map((all)=>{
                      return <BigCarouselFurniture allImg={all} key={index}/>
                    })

                      })
                    }

                   </Carousel>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </UserContext.Consumer>
    </>
  );
};
}

export default Cover;
