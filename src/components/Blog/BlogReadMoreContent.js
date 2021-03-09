import React from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../Context'

const BlogReadMoreContent = (props) => {
  return (
<>
<UserContext.Consumer>
{
    (context)=>(
      <>
      <div className="readMoreBlog">
        {/* <h1>{context.state.readMoreContentPage?context.state.readMoreContentPage.title:''}</h1> */}
<div className="container">
<div className="row">
<div className="coll">
<div className="header">
<h3>{context.state.readMoreContentPage?context.state.readMoreContentPage.title:''}</h3>
<div className="info">
  <span><i class="fas fa-user"></i></span><span>{context.state.readMoreContentPage?context.state.readMoreContentPage.by:''}</span><span><i class="far fa-calendar-alt"></i></span><span>
    {context.state.readMoreContentPage?context.state.readMoreContentPage.date[0]:''}.
    {context.state.readMoreContentPage?context.state.readMoreContentPage.date[1]:''}.
  {context.state.readMoreContentPage?context.state.readMoreContentPage.date[2]:''}</span>
</div>
</div>
<div className="readMore_coverImg">
  <img src={context.state.readMoreContentPage?context.state.readMoreContentPage.img[0]:''} alt="" className="img-fluid"/>
</div>
</div>
<div className="coll">
<div className="text_ReadMoreBlig">
  <p>{context.state.readMoreContentPage?context.state.readMoreContentPage.contetsAll:''}</p>
<p>{context.state.readMoreContentPage?context.state.readMoreContentPage.contetsAll1:''}</p>

  <p>{context.state.readMoreContentPage?context.state.readMoreContentPage.contetsAll2:''}</p>

<p>{context.state.readMoreContentPage?context.state.readMoreContentPage.contetsAll3:''}</p>
<p>{context.state.readMoreContentPage?context.state.readMoreContentPage.contetsAll4:''}</p>
</div>
</div>
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

export default BlogReadMoreContent
