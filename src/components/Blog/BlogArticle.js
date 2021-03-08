import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'
import {Link} from 'react-router-dom'

const BlogArticle = (props) => {
  return (
  <>
<UserContext.Consumer>
{
  (context)=>(

    <>


  <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">

        <div class="view overlay rounded z-depth-2 mb-4">
          <img class="img-fluid" src={props.img} alt="Sample image"/>
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>


        <Link class="pink-text"
                   onClick={context.toFilteredProduct}
          to={props.furniture==='chair'&&'/chair'||
            props.furniture==='officechair'&&'/chair'||
            props.furniture==='sofa'&&'/sofa'||
            props.furniture==='table'&&'/table'||
            props.furniture==='bed'&&'/bedroom'}
             data-index={props.id}


        >

            <h6 style={{ pointerEvents: "none" }} onClick={context.toFilteredProduct} class="font-weight-bold mb-3">
              {props.furniture=="chair"&&<i class="fas fa-chair"></i>
              || props.furniture=="sofa"&&<i class="fas fa-couch"></i>
            ||props.furniture=="table"&& <i class="fas fa-kaaba"></i>
          || props.furniture=="bed"&&<i class="fas fa-bed"></i>
        || props.furniture=="officechair"&&<i class="fas fa-chair"></i> } {props.furniture=="officechair"?"Chair":props.furniture}</h6>
  </Link>




        <h4 class="font-weight-bold mb-3"><strong>{props.title}</strong></h4>

      <p>by <a class="font-weight-bold">{props.by}</a>, {props.date[0]}.{props.date[1]}.{props.date[2]}</p>

    <p class="dark-grey-text">{props.content}</p>

      <div class="readMore">
      		<Link data-index={props.dataIndexBlog} onClick={context.readMorePageClick} to={context.state.readMorePageLink} class="button" href="#">Read more</Link>

      </div>
      </div>
    </>

  )
}
</UserContext.Consumer>

    {/* </div>
</div>

  </section> */}

  </>
  )
}

export default BlogArticle
