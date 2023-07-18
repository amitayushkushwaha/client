import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function signIn(ev) {
    ev.preventDefault();
   const response= await fetch("http://localhost:4000/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).catch((err)=>{
      console.log(err);
    });
  
    if (response.ok) {
      setRedirect(true);
    }else{
      alert("wrong credentials");
    }
  }
  if (redirect) return <Navigate to={"/"} />;
  return (
    <form className="form-signin" onSubmit={signIn}>
      <h1>Sign In to blogs!</h1>
      <div className="test">
        <input
          type="text"
          id="inputUsername"
          className="form-control"
          placeholder="Username"
          value={username}
          name="username"
          autoComplete="off"
          required
          onChange={(ev) => {
            setUsername(ev.target.value);
          }}
        />
      
      </div>
      <div className="text">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password "
          value={password}
          autoComplete="off"
          name="password"
          required
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
      
      </div>
      <br />
      <button type="submit">Sign In</button>
      {/* <button>Sign In with Google</button> */}
      <p>@Amit_2023</p>
    </form>
  );
}
export default Signin;
