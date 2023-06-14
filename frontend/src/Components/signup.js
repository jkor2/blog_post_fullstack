import React from "react";

export default function Signup() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        console.log(formData)
        
      };




    return(
        <div className="form-hold">
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John"/>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe"/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jdoe@gmail.com"/>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="********" />
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    )
}