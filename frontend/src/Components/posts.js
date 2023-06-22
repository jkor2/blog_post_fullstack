import React from "react";
import { Dna } from "react-loader-spinner";

export default function Posts() {
  const [data, setData] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
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
      .then((data) => setData(data))
      .then(setDisplay(true));
  }, []);

  console.log(data);

  return (
    <div className="container">
      {display === false ? (
        <div className="load-hold">
          <Dna
            visible={true}
            height="1"
            width="1"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div>
          {data.status !== 200 ? (
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
      )}
    </div>
  );
}
