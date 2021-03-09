import React from 'react'
import PropTypes from 'prop-types'

const BlogItem = (props) => {
  return (
<>
<div className="coll col-lg-4">
  <article>
    <img
      src={props.bg}
      alt="" className="img-fluid"
    />
    <div className="textBlog">
      <div className="dateComments">
        <div className="date">
        <span><i className="far fa-calendar-alt"></i></span> 15 Jan 2020
        </div>
        <div className="comment">
          <span><i className="fas fa-comments"></i></span> 4 Comments
        </div>
      </div>
      <div className="text">
        <h5>Products that fight static</h5>
        <p>
          Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus
          eget luctus nisi. Nullam euismod leo vehicula, rutrum
          magna in, ornare enim vehicula, rutrum magna in, ornare
          enim.
        </p>
      </div>
      <div className="btnCenter">
      <div className="btn from-center">Read more</div>
      </div>

    </div>
  </article>
</div>

</>
  )
}

export default BlogItem
