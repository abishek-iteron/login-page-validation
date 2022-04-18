import React from "react";
import useForm from "./useForm";
import "./index.css";
import validate from "./FormValidation";

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login(data) {}

  return (
    <div className="container">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div>
            <h2> WELCOME</h2>
          </div>

          <div className="field">
            <input
              type="email"
              name="email"
              id="control"
              placeholder="Email"
              onChange={handleChange}
            />
            <p>{errors.email}</p>
          </div>
          <div className="field">
            <input
              type="password"
              id="control"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />

            <p>{errors.password}</p>
          </div>
          <div className="field">
            <a href="">Forget Password</a>
          </div>

          <div className="field">
            <button type="submit" className="button ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
