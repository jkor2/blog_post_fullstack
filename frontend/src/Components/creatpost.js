import React from "react";

export default function CreatePost() {
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

  const [formData, setFormData] = React.useState({
    title: "",
    message: "",
    user: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/posts/admin/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setFormData({
      title: "",
      message: "",
      user: "",
    });
  }

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
                <h1>Create a post!</h1>
              </div>
              <div className="vh-two">
                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  className="form-two"
                >
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    placeholder="Title"
                    className="title"
                    value={formData.title}
                    onChange={handleChange}
                  ></input>
                  <textarea
                    id="content"
                    name="message"
                    rows="10"
                    cols="50"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <button type="submit" className="form-button-two">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
