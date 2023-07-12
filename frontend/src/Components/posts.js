import React from "react";
import { Dna } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const [data, setData] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  const token = localStorage.getItem("token");

  const handleDislike = () => {
    console.log("Connected");
  };

  const handleLike = (item) => {
    console.log("Connected");
    console.log(item);
    fetch("/api/message/like/" + item, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Get the month, day, and year from the date object
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    // Format the date as "Month Day, Year"
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
  };

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
  const renderData = () => {
    return data.posts.map((curr) => {
      return (
        <div className="posts-holder-individual">
          <div className="title-post">{curr.title}</div>
          <div>
            <div>{curr.message}</div>
          </div>
          <div>
            <div className="seperate-links">
              <div>{curr.user.fname}</div>
              <div className="small-text">{formatDate(curr.date)}</div>
              <div className="like-dislike">
                <button
                  className="button-like-dislike"
                  onClick={() => handleLike(curr._id)}
                >
                  like
                </button>
                <button className="button-like-dislike" onClick={handleDislike}>
                  Dislike
                </button>
              </div>
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
