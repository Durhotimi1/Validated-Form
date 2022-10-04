import "./Form.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Form = () => {
  const InitialValues = { username: "", email: "", password: "" };
  const [FormValues, SetformValues] = useState(InitialValues);
  const [FormErrors, SetformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetformValues({ ...FormValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetformErrors(validate(FormValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(FormErrors);
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
      console.log(FormValues);
    }
  }, [FormErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^{^\s@}+@{^\s@}+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is Required!";
    }
    if (!values.email) {
      errors.email = "Email is Required!";
    }
    if (!values.password) {
      errors.password = "Password is Required!";
    } else if (values.password.length < 4) {
      errors.password = "Password should be more than 4 !";
    } else if (values.password.length > 10) {
      errors.password = "Password shouldn't be more than 10!";
    }
    return errors;
  };

  return (
    <div className="form">
      {Object.keys(FormErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed In Successfully</div>
      ) : (
        <pre>{JSON.stringify(FormValues, undefined, 2)}</pre>
      )}
      <div className="style">
        <form className="form1" onSubmit={handleSubmit}>
          <h2>Login Page</h2>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={FormValues.username}
            onChange={handleChange}
          />
          <p className="pp">{FormErrors.username}</p>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={FormValues.email}
            onChange={handleChange}
          />
          <p className="pp">{FormErrors.email}</p>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={FormValues.password}
            onChange={handleChange}
          />
          <p className="pp">{FormErrors.password}</p>
          <button className="login">Login</button>
        </form>
        <p>
          Don't Have An Account? Click
          <Link to="/Register">
            <button className="registerbutt">Here</button>
          </Link>
        </p>
      </div>
    </div>
  );
};
