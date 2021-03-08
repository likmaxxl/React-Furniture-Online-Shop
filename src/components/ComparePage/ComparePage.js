import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import {allProducts} from '../allProducts'




class ComparePage extends React.Component {

  render () {

return(
  <>
  <UserContext.Consumer>
    {
      (context)=>(
        <>
        <div className="comparePage">

        <div className="compareHeader">
          <div className="row">
            <div className="coll">
              <div className="searchCompare">
                <p>Compare with</p>
              <form action="" onSubmit={context.compareSearch} data-index="1">
                <input type="text"
                  autoComplete="off"
                  name='compare1'
                  value={context.state.compare1}
                onChange={context.compareInput}
                  />
              <button>Search</button>
              </form>
              <div className="resultRel">
<div className="resultAbs">


          {
            context.state.suggestions1.length>0&&
context.state.suggestions1.map((all)=>{
return <>{
  <div className="productSearch" onClick={context.selectEl}>
<div className="name">
{all.name}
</div>
<div className="image">
<img className="img-fluid" src={all.img[0]} alt=""/>
</div>
</div>}</>
      })

          }
        </div>
                          </div>
              <div className="guide">
                <span><i class="fas fa-info"></i></span>Please enter model name or part of it
              </div>
              </div>
              <div className="titleImage">
                <div className="title">
                  <h5>{context.state.comparedProduct1.length>0?context.state.comparedProduct1[0].name:context.state.singleProduct.name}</h5>
              </div>
                <div className="image">
                  {/* <img className="img-fluid" src={context.state.comparedProduct1[0].length>0?context.state.comparedProduct1[0].img[0]:context.state.singleProduct&&context.state.singleProduct.img[0]} alt=""/> */}

                  <img className="img-fluid" src={context.state.comparedProduct1[0]&&context.state.comparedProduct1[0].img[0]||context.state.singleProduct&&context.state.singleProduct.img[0]} alt=""/>

          </div>
              </div>
            </div>
            <div className="coll">
              <div className="searchCompare">
                <p>Compare with</p>
                  <form action=""
                    onSubmit={context.compareSearch}
                    data-index="2"
                    >

                      <input type="text"
                        autoComplete="off"
                        name='compare2'
                        value={context.state.compare2}
                      onChange={context.compareInput}
                        />
                  <button>Search</button>

                  </form>
                  <div className="resultRel">
<div className="resultAbs">


              {
                context.state.suggestions2.length>0&&
context.state.suggestions2.map((all)=>{
  return <>{
      <div className="productSearch" onClick={context.selectEl}>
<div className="name">
{all.name}
</div>
<div className="image">
<img className="img-fluid" src={all.img[0]} alt=""/>
</div>
  </div>}</>
          })

              }
            </div>
                              </div>
              <div className="guide">
                <span><i class="fas fa-info"></i></span>Please enter model name or part of it
              </div>
              </div>
              <div className="titleImage">
                <div className="title">
                  <h5>{context.state.comparedProduct2.length>0&&context.state.comparedProduct2[0].name}</h5>
                </div>
                <div className="image">
                  {
                    context.state.comparedProduct2.length>0?
                     <img className="img-fluid" src={context.state.comparedProduct2[0].img[0]} alt=""/> :
                       <span>
                         <i class="fas fa-chair"></i>
                       </span>
                  }

                </div>
              </div>
            </div>
            <div className="coll">
              <div className="searchCompare">
                <p>Compare with</p>
              <form action=""   data-index="3" onSubmit={context.compareSearch}>
                    <input type="text"
                      autoComplete="off"
                      name='compare3'
                      value={context.state.compare3}
                    onChange={context.compareInput}
                      />
                  <button>Search</button>

                  </form>
                  <div className="resultRel">
<div className="resultAbs">


              {
                context.state.suggestions3.length>0&&
context.state.suggestions3.map((all)=>{
  return <>{
      <div className="productSearch" onClick={context.selectEl}>
<div className="name">
{all.name}
</div>
<div className="image">
<img className="img-fluid" src={all.img[0]} alt=""/>
</div>
  </div>}</>
          })

              }
            </div>
                              </div>
              <div className="guide">
                <span><i class="fas fa-info"></i></span>Please enter model name or part of it
              </div>
              </div>
              <div className="titleImage">
                <div className="title">
                  <h5>{context.state.comparedProduct3.length>0&&context.state.comparedProduct3[0].name}</h5>
                </div>
                <div className="image">
                  {
                    context.state.comparedProduct3.length>0?
                     <img className="img-fluid" src={context.state.comparedProduct3[0].img[0]} alt=""/> :
                       <span>
                         <i class="fas fa-chair"></i>
                       </span>
                  }


                </div>
              </div>
            </div>
          </div>
        </div>


      <div className="tableInfoProducts">
        <table class="table table-hover">

          <tbody>

            <tr>
              <td>Furniture</td>
            <td>{context.state.comparedProduct1.length>0?context.state.comparedProduct1[0].furniture:context.state.singleProduct.furniture}</td>
              <td>{context.state.comparedProduct2.length>0&&context.state.comparedProduct2[0].furniture}</td>
            <td>{context.state.comparedProduct3.length>0&&context.state.comparedProduct3[0].furniture}</td>
            </tr>

            <tr>
              <td>Popularity</td>
              <td>{context.state.comparedProduct1.length>0?context.state.comparedProduct1[0].furnitureGalleryProducts:context.state.singleProduct.furnitureGalleryProducts}</td>
            <td>{context.state.comparedProduct2.length>0&&context.state.comparedProduct2[0].furnitureGalleryProducts}</td>
          <td>{context.state.comparedProduct3.length>0&&context.state.comparedProduct3[0].furnitureGalleryProducts}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{context.state.comparedProduct1.length>0?'$'+context.state.comparedProduct1[0].price:'$'+context.state.singleProduct.price}</td>
            <td>{context.state.comparedProduct2.length>0&&'$'+context.state.comparedProduct2[0].price}</td>
          <td>{context.state.comparedProduct3.length>0&&'$'+context.state.comparedProduct3[0].price}</td>
            </tr>
            <tr>
              <td>Availability</td>
              <td>{context.state.comparedProduct1.length>0?context.state.comparedProduct1[0].avalibility:context.state.singleProduct.avalibility}</td>
            <td>{context.state.comparedProduct2.length>0&&context.state.comparedProduct2[0].avalibility}</td>
          <td>{context.state.comparedProduct3.length>0&&context.state.comparedProduct3[0].avalibility}</td>
            </tr>
            {/* <tr>
              <td>Stars</td>
              <td>{context.state.comparedProduct1.length>0?context.state.comparedProduct1[0].stars:context.state.singleProduct.stars}</td>
            <td>{context.state.comparedProduct2.length>0&&context.state.comparedProduct2[0].stars}</td>
          <td>{context.state.comparedProduct3.length>0&&context.state.comparedProduct3[0].stars}</td>
            </tr> */}
            <tr>
              <td>Stars</td>
            <td>
            {context.state.comparedProduct1[0]?context.state.comparedProduct1[0].stars.map((allStars)=>{
              return <i className="fas fa-star"></i>
            }):context.state.singleProduct&&context.state.singleProduct.stars.map((allStars)=>{
              return <i className="fas fa-star"></i>
            })}
            </td>
<td>
{context.state.comparedProduct2&&context.state.comparedProduct2[0].stars.map((allStars)=>{
  return <i className="fas fa-star"></i>
})}
</td>
<td>
  {context.state.comparedProduct3&&context.state.comparedProduct3[0].stars.map((allStars)=>{
    return <i className="fas fa-star"></i>
  })}
</td>
          </tr>
          </tbody>
        </table>
      </div>
        </div>
        </>
      )
    }
  </UserContext.Consumer>
  </>
)
  }
}

export default ComparePage;
