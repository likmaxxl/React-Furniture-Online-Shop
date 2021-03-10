import React from "react";

import BlogItem from "./BlogItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const BlogItems = (props) => {
  const bg1="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  const bg2="https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  const bg3="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

  return (
    <>
      <div id="blog">
        <div className="container">
          <div className="title">
            <h4>Latest blog</h4>
          </div>
          <Carousel showThumbs={false}>
            <div>
              <div className="row">
                <BlogItem bg={bg1}/>
              <BlogItem bg={bg2}/>
            <BlogItem bg={bg3}/>
              </div>
            </div>
            <div>
              <div className="row">
                <BlogItem bg={bg1}/>
              <BlogItem bg={bg2}/>
            <BlogItem bg={bg3}/>
              </div>
            </div>
            <div>
              <div className="row">
                <BlogItem bg={bg1}/>
              <BlogItem bg={bg2}/>
            <BlogItem bg={bg3}/>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default BlogItems;
