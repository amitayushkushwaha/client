import React from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import CreatePost from "./components/CreatePost";

function App() {
  return (
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="signin" element={<Signin />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="create" element={<CreatePost />}></Route>
    </Routes>

  );
}

export default App;
