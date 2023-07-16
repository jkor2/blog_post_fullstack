import React from "react";
//Bug: When switching from page to page, "Do you have an account" pops up for milliseconds
export default function AdminAccess() {
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
  //need to find a cleaner way to get value

  const handleSelect = (id) => {
    console.log(id);
    //take the value of the posts, once x is clicked
    //redirect to another page asking for confirmation
    //if yes, remove from db and return to this page
    //if not, just return to this page
  };

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
              <div className="remaing-space">
                <div>Testing elements</div>
                <button
                  value="Value"
                  onClick={() =>
                    handleSelect(
                      document.getElementsByClassName("test-button")[0].value
                    )
                  }
                  className="test-button"
                >
                  Testing
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
