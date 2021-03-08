import React from 'react'
import PropTypes from 'prop-types'
import BlogArticle from './BlogArticle'
import {blogContentAll} from '../BlogContent'
import {UserContext} from '../Context'

const Blog = (props) => {
  return (
<>
<div id="blogContent">

  <section class="text-left my-5">
<div className="container">

    <h2 class="h1-responsive font-weight-bold my-5 text-center">Recent posts</h2>

    <p class="text-center dark-grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum.</p>

      <UserContext.Consumer>
      {
          (context)=>(
            <>

    <div class="row">
      {
        context.state.blogContentAll&&context.state.blogContentAll.map((all,index)=>{
          return <><BlogArticle
          title={all.title}
          by={all.by}
          img={all.img}
          date={all.date}
          content={all.contents}
          furniture={all.furniture}
          id={all.id}
          dataIndexBlog={index}
          /></>
    })
}
    </div>
    </>
    )
    }
    </UserContext.Consumer>
</div>

  </section>

</div>
</>
  )
}

export default Blog
