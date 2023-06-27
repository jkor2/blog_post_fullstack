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
            <div>You dont have acess</div>
          ) : (
            <div>You are able to post!</div>
          )}
        </div>
      )}
    </div>
  );
}
