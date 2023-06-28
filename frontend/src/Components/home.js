import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="header"></div>
      <div className="body">
        <div className="ten">
          A personal blog project creaetd using Node.js, Express, and React!
        </div>
        <div className="login-singup">
          <a href="login" className="button">
            Login
          </a>
          <a href="signup" className="button">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
