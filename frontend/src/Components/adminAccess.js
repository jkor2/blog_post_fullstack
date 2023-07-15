import React from "react";

export default function AdminAccess() {
  const [data, setData] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  const token = localStorage.getItem("token");
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
            <div className="container-two">
              <div className="vh">
                <h1>Admin Access</h1>
              </div>
              <div className="remaing-space"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
