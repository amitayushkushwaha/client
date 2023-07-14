import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
var essential="";

 function NewTopbar() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch("./../profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);
  function signout() {
    fetch("./../signout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  }
essential=username;
  return (
    
      <nav className="topbar">
        <div className="brand">DAILY BLOGS</div>
        <div className="actions">
          <div className="post_actions">
            {!username && (
              <>
                <a href="/home">
                  <button className="topbar_button">Home</button>
                </a>
                <a href="/signin">
                  <button className="topbar_button">Sign In</button>
                </a>
                <a href="/signup">
                  <button className="topbar_button sign" >Sign Up</button>
                </a>
              </>
            )}
             {username && (
              <>
                <a href="/home">
                  <button className="topbar_button">Home</button>
                </a>
                <Link to="../create" state={username} relative="path">
              <button className="topbar_button">Create Post</button>
            </Link>
                <a href="/">
                  <button className="topbar_button sign" onClick={signout}>Sign Out</button>
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    
  );
} 
export default NewTopbar;
export {essential};


