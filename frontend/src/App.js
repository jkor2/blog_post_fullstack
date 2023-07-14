import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/home";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Posts from "./Components/posts";
import CreatePost from "./Components/creatpost";
import "./styles.css";
import AdminAccess from "./Components/adminAccess";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/posts/admin/create" element={<CreatePost />} />
          <Route exact path="/posts/admin/access" element={<AdminAccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
