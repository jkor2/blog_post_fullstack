import React from "react";

export default function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })

const handleChange = (event)=> {
  const { name, value } = event.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));}
  
const handleSubmit = (e) => {
e.preventDefault()
  fetch("/user/login", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
}).then((res) => res.json()).then((data) => console.log(data));

console.log(formData);

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
