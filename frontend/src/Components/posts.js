import React from "react";

export default function Posts() {
  const [data, setData] = React.useState([]);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    fetch("/api/allposts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="container">
      {data.status != 200 || data.status === [] ? (
        <div>Error</div>
      ) : (
        <div>
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
      )}
    </div>
  );
}
