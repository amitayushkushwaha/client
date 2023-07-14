import React from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
function Blogs(props) {
  return (
    <div class="blog_item">
      <div class="image_container">
        <img src={props.src} alt="img" />
      </div>
      <div class="description_container">
        <h1>{props.title.slice(0,100)}</h1>
        <h3>
          {props.username} {formatISO9075(new Date(props.createdAt))}
        </h3>
        <div class="text_content">
          <p>{props.paragraph.slice(0, 150)}  <Link to="../Blog" state={props} relative="path">
              Read more...
          </Link>.</p>

        </div>
      </div>
    </div>
  );
}
export default Blogs;
