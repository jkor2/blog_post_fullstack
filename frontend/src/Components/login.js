import React from "react";

export default function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })

const handleChange = ()=> {
  console.log("changed")
}

const handleSubmit = () => {
  console.log("Submitted!")
}

  return (
    <div className="form-hold">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jdoe@gmail.com"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="********"
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}
