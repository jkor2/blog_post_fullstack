import React from "react";

export default function Posts() {
  const [data, setData] = React.useState();
  const token = localStorage.getItem("token");
  console.log(token);

  return (
    <div className="container">
      <div className="header">TEST</div>
      <div className="body">
        <div className="ten">TEST</div>
        <div className="ten">TEST</div>
        <div className="login-singup">
          <a href="home" className="button">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
