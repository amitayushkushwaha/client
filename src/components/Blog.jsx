import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import NewTopbar from "./NewTopbar";
import { essential } from "./NewTopbar";

function Blog() {
  let { state } = useLocation();
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [blog, setBlog] = useState(state.username);
  const [time, setTime] = useState(state.createdAt);
  const [comments, setComments] = useState([]);
  async function Comment(ev) {
    ev.preventDefault();
    const response = await fetch("./../comment", {
      method: "POST",
      body: JSON.stringify({ username, comment, blog, time }),
      headers: { "Content-Type": "application/json" },
    });

    setComment(() => "");

    fetch("./../comment").then((response) => {
      response.json().then((comments) => {
        setComments(comments);
      });
    });
  }
  useEffect(() => {
    fetch("./../comment").then((response) => {
      response.json().then((comments) => {
        setComments(comments);
        setUsername(essential);
      });
    });
  }, []);
  console.log(comments);

  return (
    <div>
      <NewTopbar />

      <div
        style={{ marginLeft: "7%", marginRight: "7%", marginTop: "6rem" }}
        className="Content"
      >
        <img
          src={state.src}
          style={{
            marginRight: "20px",
            borderRadius: "10px",
            height: "20rem",
            width: "20rem",
            float: "left",
            marginBottom: "10px",
            clear: "right",
          }}
          alt="img"
        />
        <h1 className="blog_title">{state.title}</h1>

        <p className="info">
          <a className="author">{state.username}</a>
          <time style={{ marginLeft: "1rem" }}>
            {formatISO9075(new Date(state.createdAt))}
          </time>
        </p>
        <p>{state.paragraph}</p>
      </div>
      
      <form onSubmit={Comment}>
    
        <textarea
          placeholder="Comment"
          value={comment}
          style={{
            marginLeft: "7%",
            marginRight: "7%",
            marginTop: "1rem",
            width: "85vw",
            paddingLeft: "1vw",
            height: "2rem",
            paddingTop: "10px",
          }}
          onChange={(ev) => setComment(ev.target.value)}
          required
        />
        <button
          type="submit"
          style={{
            marginLeft: "7.5%",
            marginRight: "7%",
            marginTop: "1rem",
            width: "85vw",
            height: "2rem",
          }}
          disabled={essential ? false : true}
        >
          Add Comment
        </button>
      </form>

      <div style={{ clear: "left" }}>
      <p style={{marginLeft: "7%"}}>Comments</p>
        {comments.map((comment) => {
          if (comment.blog === blog && comment.time === time) {
            return (
              <p className="comment">
                <strong>
                  {" "}
                  <span style={{ fontSize: "10px",fontWeight: "bolder",color: "black",marginRight: "1vw" }}>
                    {" "}
                    {comment.username}{" "}
                    {formatISO9075(new Date(comment.createdAt))}{" "}
                  </span>{" "}
                </strong>{" "}
                {comment.comment}
              </p>
            );
          }
        })}
      </div>

    </div>
  );
}
export default Blog;
