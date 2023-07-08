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

  const renderData = () => {
    const preview = (message) => {
      const short_message = message;
      const splitMessage = short_message.split(" ").slice(0, 10).join(" ");

      return splitMessage;
    };

    return data.posts.map((curr) => {
      return (
        <div className="posts-holder-individual">
          <div className="title-post">{curr.title}</div>
          <div>
            <div>{preview(curr.message)}...</div>
          </div>
          <div>
            <div className="seperate-links">
              <div>{curr.user.fname}</div>
              <div className="mini-test-link">View More</div>
            </div>
          </div>
        </div>
      );
    });
  };

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
            <div className="home-hold-login">
              {data != [] && data.authData.user.canPost ? (
                <div>
                  <div className="header-login">
                    <a href="/posts/admin/create">Create Post</a>
                    <a>Admin Access</a>
                  </div>
                  <div className="body-login-two">{renderData()}</div>
                </div>
              ) : (
                <div>
                  <div className="body-login-two">{renderData()}</div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
