import React from "react";
import { useState } from "react";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  async function signup(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration Successfull");
    } else {
      alert("Registration failed");
    }
  }
  return (
    <form className="form-signin" onSubmit={signup}>
      <h1>Sign Up to blogs!</h1>
      <div className="test">
        <input
          type="text"
          id="inputUsername"
          className="form-control"
          placeholder="Username "
          name="username"
          value={username}
          autoComplete="off"
          required
          onChange={(ev) => {
            setUsername(ev.target.value);
          }}
        />
        
      </div>
      <div className="test">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password "
          autoComplete="off"
          value={password}
          name="password"
          required
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
      
      </div>

      <div className="test">
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={email}
          name="email"
          required
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        
      </div>

      <br />
      <button type="submit">Sign Up</button>
      {/* <button>Sign Up with Google</button> */}
      <p>@Amit_2023</p>
    </form>
  );
}
export default Signup;
