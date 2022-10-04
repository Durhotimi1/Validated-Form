import "./Register.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Register = () => {
  const initailValues = {
    fullname: "",
    email: "",
    username: "",
    phoneno: "",
    password: "",
    confirmpass: "",
  };

  const [formValues, SetformValues] = useState(initailValues);
  const [formErrors, SetformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetformValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetformErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "Full Name is Required!";
    }
    if (!values.email) {
      errors.email = "Email Address is Required!";
    }
    if (!values.username) {
      errors.username = "Username is Required!";
    }
    if (!values.phoneno) {
      errors.phoneno = "Phone Number is Required!";
    }
    if (!values.password) {
      errors.password = "Password is Required!";
    } else if (values.password.length < 4) {
      errors.password = "Password Should not be less Than 4 Characters!";
    } else if (values.password.length > 8) {
      errors.password = "Password Should not be More Than 8 Characters!";
    }
    if (!values.confirmpass) {
      errors.confirmpass = "This field is Required!";
    } else if (values.password  !== values.confirmpass) {
      errors.confirmpass = "Passwords Do Not Match!";
    }

    return errors;
  };

  return (
    <div className="register">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="u">Account Created Successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <div className="registerstyle">
        <form className="form2" onSubmit={handleSubmit}>
          <h2>Register Page</h2>
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            value={formValues.fullname}
            onChange={handleChange}
          />
          <p className="pp">{formErrors.fullname}</p>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="pp">{formErrors.email}</p>
          <label>Create Username</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <p className="pp">{formErrors.username}</p>
          <label>Phone Number</label>
          <input
            type="number"
            name="phoneno"
            value={formValues.phoneno}
            onChange={handleChange}
          />
          <p className="pp">{formErrors.phoneno}</p>
          <label>Create Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p className="pp">{formErrors.password}</p>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpass"
            value={formValues.confirmpass}
            onChange={handleChange}
          />
          <p className="pp">{formErrors.confirmpass}</p>

          <button className="registerbutton">Register</button>
        </form>
        <p>
          <Link to="/">
            Have An Account? Click <button className="here">Here</button> To Go
            To The Login Page
          </Link>
        </p>
      </div>
    </div>
  );
};
