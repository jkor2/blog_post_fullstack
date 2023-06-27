import React from "react";

export default function CreatePost() {
  const [data, setData] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  const token = localStorage.getItem("token");
  console.log(data);
  React.useEffect(() => {
    fetch("/posts/admin/create", {
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

  return (
    <div className="container">
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
          {data.authData.user.canPost !== true ? (
            <div>
              <h1>No access</h1>
              <div> Will redirect back to the home page</div>
            </div>
          ) : (
            <div>
              <h1>You can post!</h1>
              <h5>Needs form and submit here</h5>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
