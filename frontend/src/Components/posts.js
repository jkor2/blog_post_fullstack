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
      .then((data) => setData(data));

    setTimeout(() => {
      setDisplay(true);
    }, "500");
  }, []);

  console.log(data);

  return (
    <div>
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
        <div className="holder-2">
          {data.status !== 200 ? (
            <div className="holder-account-quest">
              <div>Do you have an account?</div>
              <div>
                <a href="login" className="button-ques">
                  Yes
                </a>
              </div>
              <div>
                <a href="signup" className="button-ques">
                  No
                </a>
              </div>
            </div>
          ) : (
            <div>
              <div className="header">TEST</div>
              <div className="body">
                <div className="ten">TEST</div>
                <div className="ten">TEST</div>
                <div className="login-singup">
                  <a href="/" className="button">
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
