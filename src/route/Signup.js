import React from 'react'
import "./Signupstyle.css"
import {useFormik} from "formik"
import {signUpSchema} from "../schemas/ind"
const initialValues = {
    name : "",
    email : "",
    password : "",
    confirm_password : "",
};
export default function Signup() {
const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit : (values, action)=>{
     console.log(values);
     action.resetForm();
    },
});
console.log(errors);
  return (
    <div >
      <div className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>Login</header>
          <form action="#">
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Enter your email"
            />

            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <a href="/">Forgot password?</a>
            <button type="submit" className="button">
              login
            </button>
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account?
              <label for="check">Signup</label>
            </span>
          </div>
        </div>
        <div className="registration form">
          <header>Signup</header>
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ?(<p className="form-error">{errors.name}</p>) : null}

            <input
              type="text"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ?( <p className="form-error">{errors.email}</p>): null}
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Create a password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ?(<p className="form-error">{errors.password}</p>) : null}
            <input
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm your password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ?(<p className="form-error">{errors.confirm_password}</p>) : null}
            <button type="submit" className="button">
              Signup
            </button>
          </form>
          <div className="signup">
            <span className="signup">
              Already have an account?
              <label for="check">Login</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
