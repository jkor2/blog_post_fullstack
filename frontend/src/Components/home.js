import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="header"></div>
      <div className="body">
        <div className="ten">
A blog site created with JSON Web Token, Node.JS, and React. 


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
      <div className="footer-home">
        <a href="https://github.com/JakeKorobellis" className="link-github">GitHub</a>

      </div>
    </div>
  );
}
