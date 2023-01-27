import React, { useState } from "react";
import "./login.css";
import image from "../image/icon.png";
const Login = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleForm = () => {
    setIsClicked(true);
    console.log(isClicked);
  };
  return (
    <div className="body">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <div className="sports-zone">
        <img src={image} alt="SportsZone Logo Here" />
        <p>futsal booking</p>
      </div>
      <section>
        {!isClicked ? (
          <>
            {/* LOGIN FORM HERE */}
            <h1 id="loginText">login</h1>
            <div className="login-form">
              <form action="">
                <input type="email" name="" id="email" placeholder="email" />{" "}
                <br />
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="password"
                />{" "}
                <br />
                <button className="btn" type="submit">
                  login
                </button>
              </form>
            </div>
            <div className="bottom">
              <a href="#" id="forgot">
                Forgot Password ?
              </a>{" "}
              <br />
              <label>
                Don't have an account?<a onClick={handleForm}> SignUp</a>
              </label>
            </div>{" "}
          </>
        ) : (
          // SIGNUP FORM HERE
          <>
            <div className="signup-form">
              <h1>Get started with your account.</h1>
              <form action="">
                <input
                  type="text"
                  name=""
                  id="firstname"
                  placeholder="firstname"
                />
                <input
                  type="text"
                  name=""
                  id="lastname"
                  placeholder="lastname"
                />
                <input type="email" name="" id="email" placeholder="email" />{" "}
                <br />
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="password"
                />{" "}
                <br />
                <input
                  type="password"
                  name=""
                  id="confirmpassword"
                  placeholder="confirm password"
                />{" "}
                <br />
                <button className="btn" type="submit">
                  SIGN UP
                </button>
              </form>
            </div>
          </>
        )}
      </section>
    </div>
  );
};
export default Login;
