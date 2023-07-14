
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NewTopbar from "./NewTopbar";
function CreatePost() {
  let { state } = useLocation();
  const [username, setUsername] = useState(state);
  const [title, setTitle] = useState("");
  const [summary, setSummay] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set("username", username);
    data.set("title", title);
    data.set("summary", summary);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("./../post", {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  if (redirect) return <Navigate to={"/"} />;

  return (
    <div className="create_post">
   
      <NewTopbar />
      <form className="create_post_form" onSubmit={createNewPost} style={{marginTop: "6rem"}}>
        <input
          type="title"
          placeholder="Title for the Blog"
          className="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          required
        />
        <textarea
      
          placeholder="Blog Content"
          className="summary"
          value={summary}
          onChange={(ev) => setSummay(ev.target.value)}
          required
        />
        <label htmlFor="photo-uploader" className="file-label">
          <h6>Choose Photo</h6>
          <input
            id="photo-uploader"
            type="file"
            className="file"
            onChange={(ev) => setFiles(ev.target.files)}
            required
          />
        </label>

        <button style={{ marginTop: "5px" }}>Create post</button>
      </form>
    </div>
  );
}
export default CreatePost;